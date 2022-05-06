const { Router } = require('express')
const TaskController = require('../controllers/taskController')
const Auth = require('../middlewares/auth');
const router = new Router()

const controller = new TaskController()

router.get('/', Auth.user,TaskController.getTasks)
router.post('/:id',Auth.user,TaskController.createTask)
router.patch('/:id',Auth.user, TaskController.updateTask)
router.delete('/:id',Auth.user, TaskController.deleteTask)

router.get('/:id/message', Auth.user, TaskController.getMessages)
router.post('/:id/message', Auth.user, TaskController.createMessage)
router.patch('/:id/:messageId',Auth.user, TaskController.updateMessage)

module.exports = router