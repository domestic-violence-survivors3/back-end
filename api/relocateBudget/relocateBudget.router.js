const router = require("express").Router();
const Relocate = require("./relocateBudget.model");

router.get("/:id/relocate", (req, res) => {
  const { id } = req.params;

  Relocate.findByUserId(id)
    .then(relocateBudget => {
      if (relocateBudget.length > 0) {
        res.status(200).json({ relocateBudget });
      } else {
        res.status(404).json({
          message: `This user has no relocation budgets saved`
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/relocate", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Relocate.add(body, id)
    .then(relocationBudget => {
      res.status(200).json({
        relocationBudget,
        message: "relocate budget successfully added"
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/:userId/relocate/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;
  const changes = { ...req.body, user_id: userId };

  Relocate.findById(budgetId).then(budget => {
    if (budget) {
      Relocate.updateById(changes, budgetId)
        .then(updatedBudget => {
          res.status(200).json({
            updatedBudget,
            message: `User Id: ${userId} - Relocation Budget id: ${budgetId} successfully updated`
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(404).json({
        message: `Relocation Budget: ${budgetId} -  does not exist`
      });
    }
  });
});

router.delete("/:userId/relocate/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;

  Relocate.findByUserId(userId).then(user => {
    if (user.length > 0) {
      if (user) {
        Relocate.remove(budgetId)
          .then(updatedBudget => {
            if (updatedBudget > 0) {
              res.status(200).json({
                updatedBudget,
                message: `User Id: ${userId} - Relocation Budget id: ${budgetId} successfully removed`
              });
            } else {
              res.status(404).json({ error: "Budget does not exist" });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  });
});

module.exports = router;
