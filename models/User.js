const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    googleId:{
        type:String,
        requiredd:true
    },
    displayName:{
        type:String,
        requiredd:true
    },
   firstName:{
        type:String,
        requiredd:true
    },
    lastName:{
        type:String,
        requiredd:true
    },
    image:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    }

})
module.exports=mongoose.model('User',UserSchema)