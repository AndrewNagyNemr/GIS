const { read, write } = require("./helpers");

const [, , option, arg1, arg2] = process.argv

const todos = read();
switch (option) {
    case "add":
        let id;
        lastTodo = todos[todos.length - 1];
        lastTodo ? id = lastTodo.id + 1 : id = 1
        todos.push({
            id,
            title: arg1
        })
        write(todos)
        break;

    case "edit":
        const todo = todos.find(td=>td.id === +arg1);
        todo.title = arg2
        write(todos)
        break;

    case "list":
        console.log(todos);
        break;

    case "delete":
        let newTodos = todos.filter(tds=> tds.id !== +arg1);
        write(newTodos)
        break;

    case "get":
        console.log(todos.find(td=>td.id === +arg1));
        break;

    default:
        console.log("Invalid option");
        break;
}