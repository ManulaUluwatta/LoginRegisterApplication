const express = require('express')
const router = express.Router()
const {getUser, addUser, updateUser, deleteUser} = require('../controllers/userController')

router.route('/').get(getUser).post(addUser)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router