// backend/app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const citizenRoutes = require("./routes/citizensRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mridulsharma:India123@cluster0.powvarw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useFindAndModify: false,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Routes
app.use("/citizens", citizenRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
