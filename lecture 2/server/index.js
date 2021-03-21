const http = require("http");

const users = [
    {id : 1, name :"Ahmed"},
    {id : 2, name :"Mohammed"},
    {id : 3, name :"Ali"},
]

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/" && method === "GET") {
    res.write("<h1>Hello</h1>");
    return res.end();
  }
  if (url === "/users" && method === "GET") {
      res.write(`
        <h1>The Users are</h1>
        ${JSON.stringify(users)}
    `); //template engine
    return res.end();
  }
  res.write("<h1>404 Not-Found</h1>");
  res.end();
});

server.listen(3000);
