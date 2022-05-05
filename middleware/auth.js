//Kod fråm David, kommer att behöva ändras

const jwt = require('jsonwebtoken')

module.exports = {
  user: (req, res, next) => {
    if(!req.headers.authorization){
      return res.status(401).json({error: 'Please login in'})
    }
    try{
      const token = req.headers.authorization.replace("Bearer ", "")
      const data = jwt.verify(token, process.env.JWT_SECRET)

      req.user = {
        username: data.username,
        userId: data.userId
      }
  
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
      const token = req.headers.authorization.replace("Bearer ", "")
      const data = jwt.verify(token, process.env.JWT_SECRET)
      
      if(data.role !== 'admin'){
        throw new Error('Forbidden')
      }

      req.user = {
        username: data.username,
        userId: data.userId
      }
  
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