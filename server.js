import express from  'express'
import mongoose from 'mongoose'
import blogRouter from './routers/blogRouter.js'
import userRouter from './routers/userRouter.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/SAIPEN', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api', blogRouter)
app.use('/api', userRouter)

app.get('/', (req, res)=> {
    res.send("server is ready")
})

app.listen(5000,  ()=> {
    console.log("http://localhost:5000")
})