const mongoose       = require("mongoose"),
      express        = require("express"),
      passport       = require("passport"),
      LocalStrategy  = require("passport-local"),
      expressSession = require("express-session"),
      User           = require("./models/userModel"),
      bodyParser     = require("body-parser"),
      app            = express();

//Routes
const indexRoutes   = require("./routes/indexRoutes"),
      adminRoutes   = require("./routes/adminRoutes"),
      blogRoutes    = require("./routes/blogRoutes");  


//App Config
mongoose.connect("mongodb://localhost/cemsa", { useNewUrlParser: true, useUnifiedTopology: true });
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
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Share Current User Info With All Routes
app.use((req, res, next)=>{
    res.locals.currentUser=req.user;
    next();
});


//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

const server = app.listen(3000, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Success,, Port Number is : %d", server.address().port);

});
    