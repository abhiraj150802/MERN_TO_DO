const express=require("express")
const mongoose=require('mongoose')

const routes=require('./routes/To_do_routes')
require('dotenv').config()
const cors=require('cors')


const app=express();
const PORT=process.env.PORT||8000

//middeleware
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log(`database conntected successfully`))
.catch((err)=>console.log(`error while connecting database`,err))

app.use('/api',routes)

app.listen(PORT,()=>{console.log(`backend is running at port ${PORT}`)})
