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
router.patch('/:id',Auth.worker, TaskController.update) //markera task som klart

//Customer
//Kunder (client) ska kunna se sina ärenden och skriva meddelanden på sina ärenden.
router.get('/', Auth.customer, TaskController.getAll) // getAll ska inte fungera för customers
router.patch('/:id',Auth.customer, TaskController.update) //skriva meddelanden på ärenden

//Alla endpoints
/*
router.get('/', Auth.user,TaskController.getTasks) //komma åt oavsett vilken roll man har, vara INLOGGAD!!
router.post('/:id',Auth.user,TaskController.createTask)
router.patch('/:id',Auth.user, TaskController.updateTask)
router.delete('/:id',Auth.user, TaskController.deleteTask)

router.get('/:id/message', Auth.user, TaskController.getMessages)
router.post('/:id/message', Auth.user, TaskController.createMessage)
router.patch('/:id/:messageId',Auth.user, TaskController.updateMessage)
*/

module.exports = router