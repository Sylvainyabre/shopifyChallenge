const mongoose = require('mongoose');
const {ServerApiVersion} = require("mongodb")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const CONNECTION_URI = process.env.MONGO_URI;


const connectDB = async () => {
 const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
};

  try {
    const connection = await mongoose.connect(CONNECTION_URI, options);
    console.log(
      `DataBase connected successfully:${connection.connection.host}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
