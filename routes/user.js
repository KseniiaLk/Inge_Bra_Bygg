const { Router }= require('express');
const UserController = require("../controllers/userController");
const Auth = require('../middleware/auth');

const router = new Router ();

const controller = new UserController()

//Admin
//Admin ska kunna skapa nya konton och kunna radera resurser.
router.post("/", Auth.admin,UserController.createUser);

//Worker
//Arbetare ( worker ) ska kunna skapa ärenden kopplade till kunder, 
//skriva meddelanden på ärenden, ladda upp en bild kopplat till ärendet och markera ärenden som klart.



//Customer
//Kunder (client) ska kunna se sina ärenden och skriva meddelanden på sina ärenden.

//Alla endpoints
/*
router.get("/", Auth.user, UserController.getUsers);
router.get("/me", Auth.user,UserController.getMe);
router.get("/:id",Auth.user,UserController.getUser);
router.post("/", Auth.user,UserController.createUser);
router.patch("/:id",Auth.user,UserController.updateUser)
router.delete("/:id", Auth.user,UserController.deleteUser);
*/

module.exports = router


