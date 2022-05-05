const { Router }= require('express');
const user = new Router ();
const userController = require("../controllers/userController");
const Auth = require('../middleware/auth');

user.post("/auth", userController.auth);
user.get("/", Auth.loggin, userController.auth);
user.get("/all", Auth.admin,userController.all);
user.get("/:id",Auth.admin,userController.getById);
user.post("/", Auth.admin,userController.createUser);

user.delete("/:id", Auth.admin,userController.delete);

module.exports = user


