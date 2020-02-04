var multer  = require('multer');
const express = require('express');
const bodyparser=require("body-parser");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/endgemDB",{useNewUrlParser:true});

const courseSchema=new mongoose.Schema({
  course:String,
  title:{
    type:String,
    required:[true,"required"]
  },
    path:{type: String, required: true}
});


const Material = mongoose.model("Material",courseSchema);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/public/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
// var upload = multer({ dest : __dirname+'/public/upload/' });
app.get("/",function(req,res){
  Material.find({},function(err,courseDetail){
      res.render("endgem",{courseDetail:courseDetail});
  });
});
app.get("/add",function(req,res){
  res.render("add");

});
app.post("/add",upload.single('myFile'),function(req,res,next){
  try {

  } catch (e) {

  }
  var course=req.body.course;
  var title=req.body.courseTitle;
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
const courseName=new Material({
  course:course,
  title:title,
  path:file.filename
});
courseName.save();
  res.redirect("/");
});
app.listen("2000",function()
{
  console.log("server is running 2000");
});
