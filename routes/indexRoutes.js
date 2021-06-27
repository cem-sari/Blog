const express        = require('express'),
      Blog           = require("../models/blogModel"),
      router         = express.Router();

router.get("/", (req, res)=>{
    Blog.find({},(err, foundBlogs)=>{
        if(err){
            console.log(err);
        } else {
            console.log("Success Blogs");
            console.log(foundBlogs);
            res.render('home', {foundBlogs : foundBlogs});
        }
    });
});    

router.get("/about", (req, res)=>{
    res.render('about');
});

router.get("/contact", (req, res)=>{
    res.render('contact');
});   

router.get("/post", (req, res)=>{
    res.render('post');
});   

router.get("/resume", (req, res)=>{
    res.render('resume');
});  

module.exports = router;