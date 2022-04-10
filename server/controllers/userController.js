const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Get Users || route GET /api/users || access: Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// Register new user || route: POST /api/users || access: Public
const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password, languages, bio, github, image } = req.body

  if (!name || !email || !password || !languages || !bio || !image) {
    res.status(400);
    throw new Error("Please complete all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash passowrd
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    languages,
    bio,
    github,
    image
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Authenticate a User || route: POST /api/users/login || access: Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const lowerCaseEmail = email.toLowerCase();

  // find the user in database by email
  const user = await User.findOne({ email: lowerCaseEmail });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Get Logged in User's Data || route: GET /api/users/me || access: Private
const getMe = asyncHandler(async (req, res) => {
  // req.user is set in authMiddleware
  const { _id, name, email, languages, bio, github, image } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
    languages,
    bio,
    github,
    image
  })
})

// Find a Specific User's Data || route: GET /api/users/:userId || access: Public
const findUser = asyncHandler(async (req, res) => {
  const { _id, name, email, languages, bio, github, image } = await User.findById(req.params.id)

  res.status(200).json({
    id: _id,
    name,
    email,
    languages,
    bio,
    github,
    image
  })
})

const getUsersByLanguage = asyncHandler(async (req, res) => {
  const languageUsers = await User.find({ languages: {$regex: req.params.language, $options: 'i'} })

    res.status(200).json(languageUsers)
  }
)

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  getMe,
  findUser,
  getUsersByLanguage
}
