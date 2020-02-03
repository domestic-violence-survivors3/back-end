const jwt = require("jsonwebtoken");

module.exports = function(user) {
  const payload = {
    id: user.id,
    username: user.username,
    password: user.password
  };

  const options = {
    expiresIn: "5d"
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};
