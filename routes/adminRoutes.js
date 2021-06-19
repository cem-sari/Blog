const express        = require('express'),
      router         = express.Router();

router.get("/sign-in", (req, res)=>{
    res.render('admin/signin')
});  

router.post("/sign-in", (req, res)=>{

});

router.get("/sign-up", (req,res)=>{
    res.render('admin/sign-up')
});

router.post("/sign-up", (req, res)=>{

});

module.exports = router;