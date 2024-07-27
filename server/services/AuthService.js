const User = require("../models/User");
const { AuthenticationError, ValidationError } = require("../utils/errors");
const { validateEmail, validatePassword } = require("../utils/validators");

class AuthService {
  static async login(email, password) {
    try {
      if (!validateEmail(email))
        throw new ValidationError("Invalid email format");
      if (!validatePassword(password))
        throw new ValidationError("Invalid password format");

      console.log(
        "Valid email and password, attempting to find if user already exist"
      );
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError("User not found");

      if (user.lockUntil && user.lockUntil > Date.now()) {
        throw new AuthenticationError(
          "Account is temporarily locked. Try again later."
        );
      }

      console.log("User found, checking if password matches");
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        user.failedLoginAttempts += 1;
        if (user.failedLoginAttempts >= 5) {
          user.lockUntil = Date.now() + 15 * 60 * 1000; // Lock for 15 minutes
        }
        await user.save();
        throw new AuthenticationError("Invalid credentials");
      }

      // Reset failed attempts on successful login
      user.failedLoginAttempts = 0;
      user.lastLogin = new Date();
      console.log("Attempting to save user");
      await user.save();

      console.log("User saved successfully");
      return { id: user._id, name: user.name, email: user.email };
    } catch (error) {
      console.error("Error in User.login:", error);
      throw error;
    }
  }

  static async register(userData) {
    try {
      if (!validateEmail(userData.email))
        throw new ValidationError("Invalid email format");
      if (!validatePassword(userData.password))
        throw new ValidationError("Invalid password format");

      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) throw new ValidationError("Email already in use");

      const user = new User(userData);
      console.log("Attempting to save user:", user);
      await user.save();
      console.log("User saved successfully");

      return { id: user._id, name: user.name, email: user.email };
    } catch (error) {
      console.error("Error in User.register:", error);
      throw error;
    }
  }
}

module.exports = AuthService;
