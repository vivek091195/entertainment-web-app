require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
