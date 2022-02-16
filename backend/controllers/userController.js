const asyncHandler = require('express-async-handler')

//get user
const getUser = async (req, res) => {
    res.status(200).json({message: 'Get Users'})
}

//add user
const addUser = async (req,res) => {
    console.log(req.body);
    if(!req.body.name){
        res.status(400)
        throw new Error('Please fill a text field')
    } 
    res.status(200).json({message: 'Register users'})
}

//update user
const updateUser = async (req,res) => {
    res.status(200).json({message: `Update user ${req.params.id}`})
}

//delete user
const deleteUser = async (req,res) => { 
    res.status(200).json({message: `Delete user ${req.params.id}`})
}

module.exports = {
    getUser, 
    addUser,
    updateUser,
    deleteUser
}