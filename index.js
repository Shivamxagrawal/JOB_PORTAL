const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require("./utils/database");
const dotenv = require('dotenv').config();
const userRoute = require("./routes/user.route");
const companyRoute=require("./routes/company.route")
const jobRoute=require("./routes/job.route")

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Fixed the typo here
    credentials: true, // Allow credentials
};

// Enable CORS with the options
app.use(cors(corsOptions));

// Test route
app.get("/", (req, res) => {
    res.send("Server running");
});

// User routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);

// Start the server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
