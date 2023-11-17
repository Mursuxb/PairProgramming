const User = require('../models/users')

// Get All users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    })
  }
}

// Get Single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    })
  }
}

// Create a New user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    })
  }
}

// Update user by ID
const patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    )

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  patchUser,
  putUser,
  deleteUser,
}