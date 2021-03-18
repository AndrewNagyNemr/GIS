//dummy
function auth(req, res, next) {
  const { username, password } = req.body;
  if ((username === "admin") & (password === "admin")) next();
  else res.status(401).json({ error: "un-authorized" });
}

module.exports = auth;
