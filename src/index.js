const express=require("express");
const morgan=require("morgan");
const path=require("path");
const ejs=require("ejs");
const app=express();

//settings
app.set("host",process.env.PORT||3000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// middlewares


//routes
app.use(require(path.join(__dirname,"./routes/routes")));

// static files
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
app.listen(app.get("host"),()=>{
console.log("server runing in host", app.get("host"));
})