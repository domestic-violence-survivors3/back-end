const router = require("express").Router();
const Personal = require("./personalBudget.model");

router.get("/:id/personal", (req, res) => {
  const { id } = req.params;
  console.log(req);

  Personal.findByUserId(id)
    .then(personalBudget => {
      res.status(200).json({ personalBudget });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/personal", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Personal.add(body, id)
    .then(data => {
      res
        .status(200)
        .json({ data, message: "personal budget successfully added" });
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
      console.log("nothing");
    }
  });
});

router.delete("/:userId/personal/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;

  Personal.findByUserId(userId).then(budget => {
    if (budget > 0) {
      Personal.remove(budgetId)
        .then(updatedBudget => {
          res.status(200).json({
            updatedBudget,
            message: `User Id: ${userId} - Personal Budget id: ${budgetId} successfully removed`
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(404).json({
        message: `User Id: ${userId} - Personal Budget id: ${budgetId} does not exist`
      });
    }
  });
});

module.exports = router;
