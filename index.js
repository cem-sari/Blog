const mongoose       = require("mongoose"),
      express        = require("express"),
      passport       = require("passport"),
      LocalStrategy  = require("passport-local"),
      expressSession = require("express-session");
      User           = require("./models/userModel"),
      bodyParser     = require("body-parser"),
      app            = express();

const { request } = require("express");
//Routes
const indexRoutes   = require("./routes/indexRoutes");
const userModel     = require("./models/userModel");
      adminRoutes   = require("./routes/adminRoutes");  


//App Config
mongoose.connect("mongodb://localhost/Blog")
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Passport Config
app.use(require("express-session")({
    secret:"Guvenlik Cumlemiz",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy());


//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);

const server = app.listen(3000, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Success,, Port Number is : %d", server.address().port);

});
    