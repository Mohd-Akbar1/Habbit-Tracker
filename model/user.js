const mongoose=require('mongoose')

const userScheam=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    days: [],
},{timestamps:true})

const User=new mongoose.model('User',userScheam)

module.exports=User