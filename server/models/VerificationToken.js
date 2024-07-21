const mongoose = require("mongoose");

const VerificationTokenSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  token: { type: String, required: true, unique: true },
});

VerificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true });

const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
);

module.exports = VerificationToken;
