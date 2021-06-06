const express =require('express')
const passport = require('passport')

const router=express.Router()

//@desc auth with Google


router.get('/google',passport.authenticate('google',{scope:['profile']}))

//google auth ccacllback
//get/auth/google/callbacck
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/dashboard')
})

//@desc logun user

// @router

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})

module.exports=router