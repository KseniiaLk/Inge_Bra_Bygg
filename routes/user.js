const { Router }= require('express');
const UserController = require("../controllers/userController");
const AuthController  = require("../controllers/authController");
const Auth = require('../middleware/auth');

const router = new Router();

//const controller = new UserController()
//const aController = new AuthController() //authController

//Admin
//Admin ska kunna skapa nya konton och kunna radera resurser.
router.post('/authenticate', AuthController.authenticate) //Login - FUNGERAR!!!!
router.get('/me', Auth.admin, UserController.getMe) //invalid token
router.post('/createuser', Auth.admin, UserController.create); //invalid token

//Worker
//Arbetare ( worker ) ska kunna skapa ärenden kopplade till kunder, 
//skriva meddelanden på ärenden, ladda upp en bild kopplat till ärendet och markera ärenden som klart.
//router.post('/', Auth.worker, aController.authenticate) //Login


//Customer
//Kunder (client) ska kunna se sina ärenden och skriva meddelanden på sina ärenden.
//router.post('/', Auth.customer, aController.authenticate) //Login

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


