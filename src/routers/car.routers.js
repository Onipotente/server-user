const router = require('express-promise-router')()
const carController = require('../controllers/car.controller')

router.get('/cars', carController.findAll)
router.get('/car/:id', carController.findById)
router.post('/car', carController.create)
router.put('/car/:id', carController.update)
router.delete('/car/:id', carController.delete)

module.exports = router