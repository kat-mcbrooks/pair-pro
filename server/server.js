const express = require("express");
require("dotenv").config({ path: "./config.env" });
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./db/conn");
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors()); //cors is needed for security apparently

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
