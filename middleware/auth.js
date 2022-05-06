//Kod fråm David, kommer att behöva ändras
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config/.env'})

module.exports = {
  customer: (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({error: 'Please login in'})
    }
    try{
      const token = req.header("Authorization").replace("Bearer ", "")
      const user = jwt.verify(token, process.env.JWT_SECRET_CUSTOMER)

      if(user.role !== 'customer'){
        throw new Error('Forbidden')
      }

      req.user = user
      next()
      
    }catch(error){
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
    }
  },
  admin:(req, res, next) => {
    if(!req.headers.authorization){
      return res.status(401).json({error: 'Please login in'})
    }
    try{
      const token = req.header("Authorization").replace("Bearer ", "")
      const user = jwt.verify(token, process.env.JWT_SECRET_ADMIN)
      
      if(user.role !== 'admin'){
        throw new Error('Forbidden')
      }

      req.user = user
  
      next()
      
    }catch(error){
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
    }
  }, 
  worker:(req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({error: 'Please login in'})
    }
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user = jwt.verify(token, process.env.JWT_SECRET_WORKER)

        if(user.role !== 'worker'){
            throw new Error('Forbidden')
        }

        req.user = user
    
        next()
      
    }catch(error){
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
    }
}
}