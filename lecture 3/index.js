const express = require("express");

const app = express();
const port = 5000;

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "ALi" },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === +req.params.id);
  if (!user)
    return res.status(404).json({ error: "no user with the given id" });
  res.json(user);
});

app.post("/users", (req, res) => {
  const id = users[users.length - 1].id + 1;
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name is required" });
  if (name.length < 3)
    return res.status(400).json({ error: "name must be at least 3 chars" });
  const newUser = { id, name };
  users.push(newUser);
  res.json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  if (!user)
    return res.status(404).json({ error: "no user with the given id" });
  if (!name) return res.status(400).json({ error: "name is required" });
  if (name.length < 3)
    return res.status(400).json({ error: "name must be at least 3 chars" });
  user.name = name;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === +id);
  if (index === -1)
    return res.status(404).json({ error: "no user with the given id" });
  const user = users.splice(index, 1);
  res.json(user[0]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
