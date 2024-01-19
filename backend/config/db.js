const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ingenious091:321022302015@cluster1.sefmipw.mongodb.net/";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;  
