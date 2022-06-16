const { Task, Message } = require('../models')

module.exports = {
    async getOne(req, res, next){
        try{
            const task = await Task.findOne({where:{id: req.params.id}})
            if(!task){
                //något felmeddelande
                res.status(404).json()
            }
            res.json(task)
        }catch(error){
            next(error)
        }
    },

    async getAll(req, res, next){
        const tasks = await Task.findAll({where: {customer_id : req.user.id}})
        res.json(tasks)
    },

    async create(req, res, next){
        const { title, task_status, customer_id, worker_id } = req.body
        const task = await Task.create({title, task_status, customer_id, worker_id})
        res.status(201).json(task)
    },

    async update(req, res, next){
        try{
            const task = await Task.findOne({where:{task_id: req.params.id}})
            const { message, task_status } = req.body //images
            if(!task){
                res.status(404).json()
            }
            task.message = message
            //task.image = images
            task.task_status = task_status
            task.save()
            res.json(task)
        }catch(error){
            next(error)
        }
    },

    async delete(req, res, next){
        const task = await Task.destroy({where: {task_id: req.params.id}})
        res.status(200).json({message: 'Task is deleted'})
    },

    async createMessage(req, res, next){
        const { message, user_id, image} = req.body
        const task_id = req.params.id
        const msg = await Message.create({message, task_id, user_id, image})
        res.status(201).json(msg)
    },

    async updateMessage(req, res, next){
        const msg = await Message.findOne({where: {task_id: req.params.id}})
        const { message, user_id, image} = req.body
        if(!msg){
            res.status(404).json()
        }
            msg.message = message
            msg.user_id = user_id
            msg.image = image
            msg.save()
            res.json(msg)
    }
}

/*
router.get('/:id/message', Auth.user, TaskController.getMessages)
router.post('/:id/message', Auth.user, TaskController.createMessage)
router.patch('/:id/:messageId',Auth.user, TaskController.updateMessage)
*/
