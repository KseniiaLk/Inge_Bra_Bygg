const { Task } = require('../models')
const fs = require('fs');
const path = require('path');

module.exports = {

        async getAll(req, res, next){
          try{
            const images = fs.readdirSync(path.join('public', 'images'))
            if(!images){
              res.status(404).json()
            }
            res.json({images})
        }catch(error){
            next(error)
          }
        },
        
        /*
        async upload(req, res, next){
          try{
            fs.copyFileSync(req.files.image.tempFilePath, path.join('public','images', req.files.image.name))
            res.json({message: 'Image uploaded'})
          }catch(error){
              next(error)
          }
        },
        */
        async upload(req, res, next){
          try{
            const task = await Task.findOne({where: { task_id: req.params.id}})
            if(task){
              fs.copyFileSync(req.files.image.tempFilePath, path.join('public','images', req.files.image.name))
                task.image = path.join('public','images', req.files.image.name) // req.files.image.name
                task.save()
                res.json(task)
            }
          }catch(error){
              next(error)
          }
        },
      
}