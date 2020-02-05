const router = require("express").Router();
const Personal = require("./personalBudget.model");

router.get("/:id/personal", (req, res) => {
  const { id } = req.params;

  Personal.findByUserId(id)
    .then(personalBudget => {
      if (personalBudget.length > 0) {
        res.status(200).json({ personalBudget });
      } else {
        res.status(404).json({
          message: `This user has no personal budgets saved`
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/personal", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Personal.add(body, id)
    .then(personalBudget => {
      res.status(200).json({
        personalBudget,
        message: "personal budget successfully added"
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/:userId/personal/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;
  const changes = { ...req.body, user_id: userId };

  Personal.findById(budgetId).then(budget => {
    if (budget) {
      Personal.updateById(changes, budgetId)
        .then(updatedBudget => {
          res.status(200).json({
            updatedBudget,
            message: `User Id: ${userId} - Personal Budget id: ${budgetId} successfully updated`
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(404).json({
        message: `Personal Budget: ${budgetId} -  does not exist`
      });
    }
  });
});

router.delete("/:userId/personal/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;

  Personal.findByUserId(userId).then(user => {
    if (user.length > 0) {
      if (user) {
        Personal.remove(budgetId)
          .then(updatedBudget => {
            if (updatedBudget > 0) {
              res.status(200).json({
                updatedBudget,
                message: `User Id: ${userId} - Personal Budget id: ${budgetId} successfully removed`
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
