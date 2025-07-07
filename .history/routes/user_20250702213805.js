const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {

    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    let user = await User.findOne({ email });
    if(user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        password: hashedPassword

    })
    await newUser.save();
    let token = jwt.sign ({email,id:newUser._id}, process.env.SECRET_KEY,{expiresIn:"1w"} )  
    return res.status(201).json({ message: 'User registered successfully', token\newUser });     

    })




module.exports = router;