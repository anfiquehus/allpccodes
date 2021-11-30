var express = require('express')
var router =express.Router()

router.get('/',function(req,res,next){

    const value=["Anfique","Sabu","karatti"]

    const person={Name:"Anfique", comments:{comment:"This is a sample comment ann", date:"10-3-2021"}}
    

    const admin=false

    const v=-10

    var v1=0<v

    res.render('about',{ab:'This this about page man',msg:'succes',value,person,admin,v1})
});

module.exports=router;