function logger(req, res, next) {
  console.log(`${req.method} to ${req.url} and [${new Date().toISOString()}]`);
  next(); // allows the request to continue
  // to the next middleware or route handler
}

module.exports = logger;
