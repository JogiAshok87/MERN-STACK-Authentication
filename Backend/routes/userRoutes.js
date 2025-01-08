const router = ExpressValidator.Router()
const userController = require('../controllers/userController')

router.get('/users',userController.getUsers)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)

module.exports = router