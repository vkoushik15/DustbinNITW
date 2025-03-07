const User = require('../models/userModel');
const express = require('express');
const jwt = require('jsonwebtoken');
const Login = async (req, res) => {    
   const{email, password} = req.body;
   const user = await User.findOne({email, password});
   if(user){
       
       const token = jwt.sign({email: user.email
       }, 'Hithisisnitwdustbins');
       res.status(200).send(token);
       
}

}
module.exports = {Login};
