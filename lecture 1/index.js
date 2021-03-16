// const helpers = require("./helpers");

// {
//     getName: function() { },
//     getAge : function() {}
// }

// getName = helpers.getName
// getAge = helpers.getAge

const { getName, getAge } = require("./helpers");

const person = {
  name: "Ahmed",
  age: 21,
};

const name = getName(person);
const age = getAge(person);
console.log(name);
console.log(age);
