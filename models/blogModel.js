import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    author: {type: String},
})

const Blogs = mongoose.model("Blogs", blogSchema)

export default Blogs