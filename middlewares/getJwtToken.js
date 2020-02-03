const jwt = require("jsonwebtoken");

module.exports = function(user) {
  const payload = {
    id: user.id,
    username: user.username,
    password: user.password
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "5d"
  };

  return jwt.sign(payload, secret, options);
};
