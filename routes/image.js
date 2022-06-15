const {Router} = require('express')
const fileUpload = require('express-fileupload')
const ImageController = require('../controllers/imgController')
const Auth = require('../middleware/auth');
const router = new Router()

router.get('/', Auth.admin, ImageController.getAll) //WORKS!!!!!
router.post('/upload', Auth.admin, ImageController.upload) //WORKING



module.exports = router