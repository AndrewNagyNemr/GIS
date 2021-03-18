function logger(req, res, next) {
  // console.log("request to the server");
  // next();
  res.status(401).json({ error: "un-authorized" });
}

module.exports = logger;
