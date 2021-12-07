import express from 'express'
import Blogs from '../models/blogModel.js'

const blogRouter = express.Router();

blogRouter.post('/blog', (req, res) => {
    const dbBlog = req.body;
    Blogs.create(dbBlog, (err, data) => {
        if(err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

blogRouter.get('/blog', (req, res) =>{
    Blogs.find((err, data) => {
        if(err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

blogRouter.get('/blog/:id', (req, res) =>{
    const singleBlog = req.params.id;
    Blogs.findById(singleBlog, (err, data) => {
        if(err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

export default blogRouter