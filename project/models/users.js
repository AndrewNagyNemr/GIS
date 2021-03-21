const mongoose = require("mongoose");

// ORM => object relational mapper

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: String,
});

const User = mongoose.model("User", schema);

const getAll = () => {
  return User.find();
};

const getOne = (id) => {
  return User.findById(id);
};

const add = (user) => {
  return new User(user).save();
};

const remove = (_id) => {
  //   return User.findByIdAndDelete(_id);
  return User.deleteOne({ _id });
};

const edit = (_id, user) => {
//   return User.updateOne({ _id }, user);
  return User.findByIdAndUpdate({ _id }, user);
};

module.exports = { getAll, getOne, add, remove, edit };
