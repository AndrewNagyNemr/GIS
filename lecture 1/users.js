const users = [
  { id: 1, name: "Ahmed", age: 21 },
  { id: 2, name: "Mohamed", age: 21 },
  { id: 3, name: "Ali", age: 21 },
];

//CRUD
// create
// retrieve (all, one)
// update
// delete

//auto increment

// {name: "reem", age:"22"}
const create = (user) => {
  user.id = users[users.length - 1].id + 1;
  users.push(user);
};

const getAll = () => {
  return users;
};

const getOne = (id) => {
  return users.find((user) => user.id === id);
};

const deleteOne = (id) => {
  //   return users.filter((user) => user.id !== id); => new Array
  const index = users.findIndex((user) => user.id === id);
    return users.splice(index, 1) // => return array with the deleted values 
    // [{ id: 2, name: "Mohamed", age: 21 }]
};

const edit = (id, newData) => {
    const user = users.find(user => user.id === id);
    user.name = newData.name;
    user.age = newData.age;
    return user
}
