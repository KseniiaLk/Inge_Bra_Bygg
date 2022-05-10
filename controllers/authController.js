const User = require("../models/User");
const jwt = require('jsonwebtoken')
require('dotenv').config({path: './config/.env'});

module.exports = {
  async authenticate(req, res) {
    //const user = await User.authenticate(req.body.username, req.body.password_hash);
    const payload ={
      name: req.body.username,
      password: req.body.password_hash
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN)
    res.json({token, payload})
  },
};