const User = require("../models/User");

module.exports = {
  async authenticate(req, res) {
    console.log("TEST CONSOLE LOG")
    const token = await User.authenticate(req.body.username, req.body.password_hash);
    console.log(token)
    res.json(token);
  },
};