var router= require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/User')

// adding users to the database . user registration
router.post('/add', async (req,res) => {

    console.log(req.body)

    //hashing the password
    const salt = await bcrypt.genSaltSync(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //declaring new user model
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password,
        fullname: req.body.fullname,
    });

    try {
        const saveduser = await user.save();
        res.json({data: saveduser})
    }
    catch(error) {
        res.status(400).json({error})
    }
});

//login users
router.post('/login', async (req,res) => {

    //check user based on email
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).json({ error: "Email is wrong" })
    }
    
    //check password with password hash from database
    const validPassword = await bcrypt.compareSync(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({error: "password is wrong"});
    }

    const token = jwt.sign({
        name: user.username,
        id: user._id
    }, "hello");

    res.json({token, name: user.fullname, id: user._id})
    
})

module.exports = router