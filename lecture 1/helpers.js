const getName = (person) => {
  return person.name;
};

const getAge = (person) => {
  return person.age;
};

const logger = (message) => {
    console.log(message);
} 

// module.exports = {
//   x: getName,
//   y: getAge,
// };

// module.exports = {
//     getName: getName,
//     getAge: getAge,
// };

module.exports = {
  getName,
  getAge,
};
