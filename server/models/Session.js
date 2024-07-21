const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  sessionToken: { type: String, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  expires: { type: Date, required: true },
});

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
