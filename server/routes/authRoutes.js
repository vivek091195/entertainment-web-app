const jwt = require("jsonwebtoken");
const express = require("express");
const AuthService = require("../services/AuthService");
const rateLimiter = require("../middleware/rateLimiter");

const router = express.Router();

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

router.post("/login", rateLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);

    console.log("Attempting to create token " + result.id);
    const token = createToken(result.id);

    console.log("Token created successfully");
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: parseInt(process.env.JWT_EXPIRATION) * 1000,
    });

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/register", rateLimiter, async (req, res, next) => {
  try {
    const result = await AuthService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
