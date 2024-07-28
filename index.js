import express from "express";


const app = express();


app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(4000,()=>{
    console.log(`server is start at port 4000`)
})