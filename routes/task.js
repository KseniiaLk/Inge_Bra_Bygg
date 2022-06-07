const { Router } = require('express')
const TaskController = require('../controllers/taskController')
const Auth = require('../middleware/auth');
const router = new Router()

//Admin
//Admin ska kunna skapa nya konton och kunna radera resurser.
router.delete('/:id',Auth.admin, TaskController.delete) // FUNKAR!!!

//Worker
//Arbetare ( worker ) ska kunna skapa ärenden kopplade till kunder, 
//skriva meddelanden på ärenden, ladda upp en bild kopplat till ärendet och markera ärenden som klart.
router.post('/createtask',Auth.worker, TaskController.create) //FUNKAR!!!
router.patch('/:id',Auth.worker, TaskController.update) //FUNKAR!!!

//Customer
//Kunder (client) ska kunna se sina ärenden och skriva meddelanden på sina ärenden.
router.get('/', Auth.customer, TaskController.getAll) // Should work, NEEDS TESTING!
router.patch('/:id',Auth.customer, TaskController.update) //skriva meddelanden på ärenden

//Alla endpoints
/*
router.get('/', Auth.user,TaskController.getTasks) //komma åt oavsett vilken roll man har, vara INLOGGAD!!
router.post('/:id',Auth.user,TaskController.createTask)
router.patch('/:id',Auth.user, TaskController.updateTask)
router.delete('/:id',Auth.user, TaskController.deleteTask)

/* WORKING WITH THESE RIGHT NOW */

//router.get('/:id/message', Auth.user, TaskController.getMessages)
router.post('/:id/messages', Auth.worker, TaskController.createMessage) //FUNKAR!!!
router.patch('/:id/messages',Auth.worker, TaskController.updateMessage) //FUNKAR!!!


module.exports = router