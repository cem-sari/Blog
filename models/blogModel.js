const mongoose            = require("mongoose");

var blogSchema = new mongoose.Schema({
    
    title               : { type:String, required:"Cannot be empty" },
    subtitle            : { type:String, required:"Cannot be empty" },
    blogImage           : { type:String, required:"Cannot be empty" },
    blogText            : { type:String, required:"Cannot be empty" },
    date                : { type: Date, default : Date.now }

});

module.exports = mongoose.model("Blog", blogSchema);