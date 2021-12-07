import express from 'express'
import Users from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post('/login', async(req, res) => {
    const user = await Users.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                email: user.email,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({
        message: "Invalid email or password"
    })
});

userRouter.post('/register', async (req, res) => {
    // Check if this user already exisits
   let user = await Users.findOne({email: req.body.email});
   if(user){
       return res.status(400).send({message: "user already registered"});
   } else {
       user = new Users({
           name: req.body.name,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 8),
         });
         const createdUser = await user.save();
         res.send({
           _id: createdUser._id,
           name: createdUser.name,
           email: createdUser.email,
           token: generateToken(createdUser),
         });
   }
     
});

export default userRouter;