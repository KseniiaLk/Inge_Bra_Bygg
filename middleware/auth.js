//Kod fråm David, kommer att behöva ändras
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config/.env'})

module.exports = {
  user: (req, res, next) => {
    try{
      const token = req.header("Authorization").replace("Bearer ", "")
      const user = jwt.verify(token, process.env.JWT_SECRET)

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
      const user = jwt.verify(token, process.env.JWT_SECRET)
      
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
}