const express       = require('express'),
      router        = express.Router();

router.get("/addnew", (req,res)=>{
    res.render("../views/blog/newBlog")
});

module.exports = router;