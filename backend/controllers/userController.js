const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//get user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});

//add user
const addUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.userName) {
    res.status(400);
    throw new Error("Please fill a text field");
  }

  const user = await User.create({
    userName: req.body.userName,
  });
  res.status(200).json(user);
});

//update user
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User Not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

//delete user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.remove()
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
