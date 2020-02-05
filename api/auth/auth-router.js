const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./auth-model");

const getJwtToken = require("../../middlewares/getJwtToken");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(`${saved}, "message: successfully registered User`);
    })
    .catch(err => {
      res.status(500).json(`${err}, error: can't register into the database`);
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.find({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user);

        res.status(200).json({
          token,
          user,
          message: `logged in: welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ error: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(`${err}, error: can't log into the database`);
    });
});

module.exports = router;
