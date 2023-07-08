const express = require("express")
const port = 4000;
const router = require("./routes/courseRoutes")
const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/",router)




app.listen(port,()=>{
    console.log(`Server Running on Localhost:${port}`)
})