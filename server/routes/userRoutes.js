const express = require('express')
const userRouter = express.Router()

const {
  getUsers,
  findUser,
  registerUser,
  loginUser,
  getMe,
  getUsersByLanguage
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

userRouter.route('/').get(getUsers).post(registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', protect, getMe)
userRouter.get('/:id', findUser)
userRouter.get('/language/:language', getUsersByLanguage)

module.exports = userRouter
