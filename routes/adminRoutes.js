const express        = require('express'),
      user           = require("../models/userModel"),
      passport       = require('passport'),
      router         = express.Router();

let adminActions = [
    {
        actionId:1,
        actionName:"changeHomeImage",
        displayName:"Change Home Image"
    },
    {
        actionId:2,
        actionName:"changeAboutImage",
        displayName:"Change About Image"
    },
    {
        actionId:3,
        actionName:"changeAboutText",
        displayName:"Change About Text"
    },
    {
        actionId:4,
        actionName:"addNewBlog",
        displayName:"Add New Blog"
    },
    {
        actionId:5,
        actionName:"ListAllBlogs",
        displayName:"List All Blogs"
    },
]

router.get("/admin", (req,res)=>{
    res.render("admin/admin",{adminActions:adminActions});
})

router.get("/signin", (req, res)=>{
    res.render('admin/signin')
});  

router.post("/signin", passport.authenticate("local",
    {
        successRedirect:"/", //eslesiyorsa //gitmiyor oc
        failureRedirect:"/signin" //eslesmiyorsa
    }),(req, res)=>{});

router.get("/signup", (req,res)=>{
    res.render('admin/signup')
});

router.post("/signup", (req, res)=>{

    let newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.redirect("/signin");
        }
        passport.authenticate("local")(req, res, ()=>{ //username password authlandi --44-45--
            res.redirect('/about'); //redirect doesn't work
        });
    })
});

module.exports = router;