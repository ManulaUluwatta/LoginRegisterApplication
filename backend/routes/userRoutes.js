const express = require('express')
const router = express.Router()
const {getUser, registerUser, updateUser, loginUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUser)
// router.post 

module.exports = router