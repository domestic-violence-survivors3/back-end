const router = require("express").Router();
const Users = require("./users-model");
const Personal = require("../personalBudget/personalBudget.model");
const Relocate = require("../relocateBudget/relocateBudget.model");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id).then(user => {
    Personal.findByUserId(id)
      .then(personalBudget => {
        Relocate.findByUserId(id)
          .then(relocateBudget => {
            res.status(200).json({ user, personalBudget, relocateBudget });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });
});

module.exports = router;
