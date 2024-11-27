const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require("./utils/database");
const dotenv = require('dotenv').config();
const userRoute = require("./routes/user.route");
const companyRoute=require("./routes/company.route")
const jobRoute=require("./routes/job.route")
const applicationRoute=require("./routes/application.route")

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
};


app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("Server running");
});


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
