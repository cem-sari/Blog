const express       = require('express'),
      Blog          = require("../models/blogModel"),
      router        = express.Router();

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    } else
    res.redirect("/signin")
};

router.get("/addnewblog", isLoggedIn, (req,res)=>{
    res.render("../views/blog/newBlog")
});

router.post("/addnewblog", (req, res)=>{
    let title       = req.body.data.title;
    let subtitle    = req.body.data.subtitle;
    let blogImage   = req.body.data.blogImage;
    let blogText    = req.body.data.blogText;

    let newBlog     = { 
        title : title,
        subtitle : subtitle,
        blogImage : blogImage,
        blogText : blogText,
     };

     Blog.create(newBlog)
     .then((newBlog)=>{
         console.log(newBlog);
         res.status(201).json(newBlog);
     })
     .catch((err)=>{
         console.log("===========ERROR OCCURED==============");
         console.log(err);
         res.send(err);
     })

});

router.get('/blogs/:blogId', (req, res)=>{
    Blog.findById(req.params.blogId)
    .then((foundBlog)=>{
        res.render("blog/showBlog", {foundBlog:foundBlog});
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    });
});

router.get("/testing", (req, res)=>{
    Blog.find()
    .then((foundBlogs)=>{
        res.json(foundBlogs);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
});

module.exports = router;