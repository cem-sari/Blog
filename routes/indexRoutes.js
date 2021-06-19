const express        = require('express'),
      router         = express.Router();


let data = [
    {
        postTitle: "Cem Deneme",
        postSubtitle: "blog denemesi bir",
        author: "cemsari",
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        postTitle: "Blog Testing",
        postSubtitle: "This is a blog testing",
        author: "cagdas",
        image: "https://images.unsplash.com/photo-1621570359159-72e496ab7d7b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        postTitle: "Deneme 2",
        postSubtitle: "Denemenin ikinci durumu",
        author: "ali",
        image: "https://images.unsplash.com/photo-1623952696014-c72971cdd22c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
]

router.get("/", (req, res)=>{
    res.render('home', {data : data})
});    

router.get("/about", (req, res)=>{
    res.render('about')
});

router.get("/contact", (req, res)=>{
    res.render('contact')
});   

router.get("/post", (req, res)=>{
    res.render('post')
});   

router.get("/resume", (req, res)=>{
    res.render('resume')
});  

module.exports = router;