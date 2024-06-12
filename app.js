const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const {fashionmodel} = require ("./models/fashion")

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/fashiondb?retryWrites=true&w=majority&appName=Cluster0")


const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input = req.body
    let fashion = new fashionmodel(input)
    fashion.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("Server Started")
})