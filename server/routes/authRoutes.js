const express = require("express");
const AuthService = require("../services/AuthService");
const rateLimiter = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/login", rateLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.json(result);
  } catch (error) {
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
