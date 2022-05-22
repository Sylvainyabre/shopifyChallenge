
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./db");
const cors = require("cors");
dotenv = require("dotenv")

app.use(cors());
app.options(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Loading the config file
dotenv.config({ path: "./config.env" });





//Database connection
connectDB();
//Routes
app.use("/api", require("routes"));

//Logging requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
);
