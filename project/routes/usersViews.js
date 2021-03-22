const express = require("express");
// const path = require("path")
const User = require("../models/users")

const router = express.Router();

// add -process

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "add-user.html"))
    res.render("add-user", { title: "Add-User" })
})

router.post("/", async (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "add-user.html"))
    // res.render("add-user", {title : "Add-User"})
    await User.add(req.body);
    res.redirect("/users/view");
})

// view process

router.get("/view", async (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "view-users.html"))
    const users = await User.getAll()
    res.render("view-users", { title:"view-users", users })
})

// delete process

router.get("/del/:id", async (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "view-users.html"))
    await User.remove(req.params.id)
    res.redirect("/users/view");
})


//edit process

router.get("/edit/:id", async (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "view-users.html"))
    const user = await User.getOne(req.params.id)
    res.render("edit-user", {title:"edit-user", user})
})

router.post("/edit/:id", async (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "htmls", "view-users.html"))
    await User.edit(req.params.id, req.body)
    res.redirect("/users/view");
})

module.exports = router