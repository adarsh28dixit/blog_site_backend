import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String}
})

const Users = mongoose.model("Users", userSchema);

export default Users