
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./db");
const cors = require("cors");
const dotenv = require("dotenv")
// const routes = require("routes")

app.use(cors());
app.options(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Loading the config file
dotenv.config({ path: "./config.env" });





//Database connection
connectDB();


//Logging requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Routes
app.use("/api", require("./routes"));

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
  
);
