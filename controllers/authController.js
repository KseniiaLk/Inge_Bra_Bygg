const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config({path: './config/.env'});

module.exports = {
  async authenticate(req, res) {
    try{
    //const user = await User.authenticate(req.body.username, req.body.password_hash);
    const payload ={
      name: req.body.username,
      password: req.body.password_hash
    }

    const user = await User.findOne({where: {username: payload.name}})
    
    if(user && (await bcrypt.compare(payload.password, user.password_hash))){
      const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN)
      //skicka token till db och sedan tillbaka!
      user.token = token
      //res.json({token, payload})
      res.status(200).json(user)
    }
    res.status(400).send("Invalid Credentials")
  } catch(err){
    console.log(err)
  }
  },
};