const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

//CORS is a necessary security mechanism that allows a web page from one domain or Origin to access a resource with a different domain
app.use(cors()); 

app.use(express.json()); // this tells express: anything that comes in as body, convert it to json
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => { // starts the server and listens on the port
  connectDB();
  console.log(`Server started on port ${port}`)
});
