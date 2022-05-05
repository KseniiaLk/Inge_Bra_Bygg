const { Router }= require('express');
const UserController = require("../controllers/userController");
const Auth = require('../middleware/auth');

const router = new Router ();

const controller = new UserController()

router.get("/", Auth.user, UserController.getUsers);
router.get("/me", Auth.user,UserController.getMe);
router.get("/:id",Auth.user,UserController.getUser);
router.post("/", Auth.user,UserController.createUser);
router.patch("/:id",Auth.user,UserController.updateUser)
router.delete("/:id", Auth.user,UserController.deleteUser);

module.exports = router


