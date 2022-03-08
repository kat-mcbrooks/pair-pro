const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const multer = require("multer");
// var fs = require('fs');

const app = express();

// should the connectDB go back up here? 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

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

app.use("/images", express.static(path.join(__dirname, "public/images")));
