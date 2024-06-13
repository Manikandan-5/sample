const express= require('express')
require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
console.log(process.env.PORT)
app.use('/',(req,res,next)=>{
    res.send("Hii")
    next()
})
app.listen(process.env.PORT,()=>{
    console.log("Connected Succesfully")
})
const connectDB=async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("database Connected");
    }
    catch(err){
        console.log(err.message)
    }
}
connectDB()