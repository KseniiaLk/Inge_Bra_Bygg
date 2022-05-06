const User = require("../models/User");

module.exports = {
  async authenticate(req, res) {
    const token = await User.authenticate(req.body.user_email, req.body.password_hash);
    res.json(token);
  },
};