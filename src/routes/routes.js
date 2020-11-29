const express=require("express");
const router=express.Router();


//pagina principal 
router.get('/',(req,res)=>{
 res.render("index",{title: "pagina principal"});

});

//pagina informacion
router.get('/informacion',(req,res)=>{
 res.render("informacion.ejs",{title: "informacion"});

});


module.exports=router;