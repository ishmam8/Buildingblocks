const jwt = require("jsonwebtoken");

// Middleware funtion to authenticate token
// Always takes 3 arguments req, res, and next
// next() moves on to next steps/middlewares
// Use this function on the routes that needs protection
module.exports = function authenticateToken(req, res, next) {
  // Getting the authorization headers from req.headers
  // authHeader looks like this, assuming it to be the type of "Bearer"
  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  const authHeader = req.headers.authorization;
  // Extracting token from the authHeader
  // We split the string from authHeader at the space after 'Bearer'
  // into an array and using the 2nd element of the array
  const token = req.cookies.token;
  console.log("received",token)
  if (!token) return res.status(401).send("You don't have access");
  // Once the token's existence is checked, it can be verified
  // using JWT. jwt.verify takes the following arguments
  // 1 => token to be verified
  // 2 => the TOKEN SECRET that is used to HASH(serialize) the token by server
  // 3 => callback with error and the value that was hashed(serialized)
  // which in our code is the user object.
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err){
      console.log("Expired token");
      return res.status(403).send("Expired token");
    } 
    // If the verification passes, we set req.user equal to
    // the user returned from the token
    req.user = user;
    next();
  });
};