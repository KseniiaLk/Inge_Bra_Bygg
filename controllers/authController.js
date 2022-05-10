const User = require("../models/User");
const jwt = require('jsonwebtoken')

module.exports = {
  async authenticate(req, res) {
    const user = await User.authenticate(req.body.username, req.body.password_hash);
    const token = jwt.sign({user}, `${process.env.JWT_SECRET_TOKEN}`, {
      expiresIn: "1h",
    })
    res.json(token);
  },
};