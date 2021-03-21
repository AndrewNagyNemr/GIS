const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello from nodeJs")

// const data = fs.readFileSync("hello.txt", { encoding: "utf-8" });

// console.log(data);

const [, , arg1, arg2, arg3] = process.argv;

switch (arg1) {
    case "add":
        //
        break;
    
    case "edit":
        //
        break;
    
    case "list":
        //
        break;
    
    case "delete":
        //
        break;

    default:
        console.log("wrong entery");
        break;
}

// fs.readFile
// fs.writeFile
