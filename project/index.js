const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

const usersRouter = require("./routes/users");
const userViewsRouter = require("./routes/usersViews");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/api/users", usersRouter);
app.use("/users", userViewsRouter);

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "htmls", "main.html"))
  res.render("main", { title: "Users App" })
})

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
