const express = require("express");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const logger = require("./middlewares/logger");
// const auth = require("./middlewares/auth");

const app = express();
const port = 5000;

//middleware
app.use(express.json()); // http request body (text) // parsing (js object) // set req.body
app.use(logger);
// app.use(auth);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
