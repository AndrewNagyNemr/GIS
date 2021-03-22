const fs = require("fs");

const read = () => {
    let data;
    try {
        data = fs.readFileSync("./database.json");
        data = JSON.parse(data)
        return data
    } catch (error) {
        fs.writeFileSync("database.json", JSON.stringify([]))
        return []
    }
}

const write = (data) => {
    fs.writeFileSync("database.json", JSON.stringify(data))
}


module.exports = { read, write }