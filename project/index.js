const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use( "/users", userRouter);

mongoose
  .connect("mongodb://localhost/GIS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
