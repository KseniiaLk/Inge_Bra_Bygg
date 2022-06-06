const { Task } = require('../models')

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
            const { message, images, task_status } = req.body
            if(!task){
                res.status(404).json()
            }
            task.message = message
            task.images = images
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
    }
}
