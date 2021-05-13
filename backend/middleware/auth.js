const jwt = require("jsonwebtoken");

module.exports = function authenticateToken(req, res, next) {
  console.log("from authenticate token");
  const refreshTokensGlobal = global.refreshTokens;
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(" ")[1]; 
  const refreshToken = req.cookies.refreshtoken;
  // console.log("received",token)
  if (!accessToken) return res.status(401).send("You don't have access");
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err){
      console.log("from middleware", user);
      // TODO -> Finalize whether refreshtoken needs to be verified 
      if (refreshTokensGlobal.find(token => token === refreshToken)) {
        const newAccessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
      }
      console.log("Expired token");
      return res.status(403).send("Expired token");
    } 
    req.user = user;
    next();
  });
};