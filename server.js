const mongoose = require("mongoose");
require("colors");
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful".cyan.bold);
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`.cyan.bold);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
