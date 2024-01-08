require('dotenv').config()
const express=require('express')
const app=express()
const router=require('./routes/user')

const mongoose=require('mongoose')


// mongoDB connection
mongoose.connect("mongodb+srv://abbashasmi:Rizvi%409967@habbit-tracker.2hg7a7b.mongodb.net/?retryWrites=true&w=majority")



//using static file
app.use(express.static('public'))

//setting view engine

app.set('view engine','ejs')
app.set('views')

app.use(express.urlencoded({extended:false}))



//setting up the router
app.use('/',router)



app.listen(process.env.PORT || 8000,function(){
    
    console.log('Server is running')
})
