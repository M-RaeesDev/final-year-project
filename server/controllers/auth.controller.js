import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res)=>{

    const{username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser =new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        // console.log("User Added Successfully",newUser);
        res.status(201).json("User created successfully");
        
    } catch (error) {
        res.status(409).json('User already exists')
    }
}