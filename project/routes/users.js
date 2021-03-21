const express = require("express");
const User = require("../models/users");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.getAll();
  res.json(users);
});

router.post("/", async (req, res) => {
//   const { firstName, lastName, emial } = req.body;
//   if (typeof firstName !== "string")
//     return res.status(400).json({ error: "first name must be a string" });
  const user = await User.add(req.body);
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.getOne(req.params.id)
  await User.remove(req.params.id)
  res.json(user);
});

router.get("/:id", async (req, res) => {
  const user = await User.getOne(req.params.id)
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const user = await User.edit(req.params.id, req.body)
  res.json(user);
});

module.exports = router;
