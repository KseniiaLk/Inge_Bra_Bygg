const { Router } = require('express')
const TaskController = require('../controllers/taskController')
const Auth = require('../middlewares/auth');
const router = new Router()

const controller = new TaskController()

//Admin
//Admin ska kunna skapa nya konton och kunna radera resurser.
router.delete('/:id',Auth.admin, TaskController.deleteTask) //radera resurser

//Worker
//Arbetare ( worker ) ska kunna skapa ärenden kopplade till kunder, 
//skriva meddelanden på ärenden, ladda upp en bild kopplat till ärendet och markera ärenden som klart.
router.post('/:id',Auth.worker,TaskController.createTask) //skapa ärenden
router.patch('/:id',Auth.worker, TaskController.updateTask) //markera task som klart

//Customer
//Kunder (client) ska kunna se sina ärenden och skriva meddelanden på sina ärenden.
router.get('/', Auth.customer,TaskController.getTasks) //se ärenden
router.patch('/:id',Auth.customer, TaskController.updateTask) //skriva meddelanden på ärenden

//Alla endpints
/*
router.get('/', Auth.user,TaskController.getTasks)
router.post('/:id',Auth.user,TaskController.createTask)
router.patch('/:id',Auth.user, TaskController.updateTask)
router.delete('/:id',Auth.user, TaskController.deleteTask)

router.get('/:id/message', Auth.user, TaskController.getMessages)
router.post('/:id/message', Auth.user, TaskController.createMessage)
router.patch('/:id/:messageId',Auth.user, TaskController.updateMessage)
*/

module.exports = router