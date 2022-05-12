const {Router} = require('express')
const fileUpload = require('express-fileupload')
const ImageController = require('../controllers/imgController')
const Auth = require('../middleware/auth');
const router = new Router()
router.post('/', fileUpload({useTempFiles:true}), ImageController.upload)
router.get('/', Auth.User, ImageController.getAll)

module.exports = router