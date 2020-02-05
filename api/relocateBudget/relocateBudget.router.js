const router = require("express").Router();
const Relocate = require("./relocateBudget.model");

router.get("/:id/relocate", (req, res) => {
  const { id } = req.params;

  Relocate.findByUserId(id)
    .then(relocateBudget => {
      res.status(200).json({ relocateBudget });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/relocate", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Relocate.add(body, id)
    .then(data => {
      res
        .status(200)
        .json({ data, message: "relocate budget successfully added" });
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
      console.log("nothing");
    }
  });
});

router.delete("/:userId/relocate/:budgetId", (req, res) => {
  const { userId } = req.params;
  const { budgetId } = req.params;

  Relocate.findByUserId(userId).then(budget => {
    if (budget > 0) {
      Relocate.remove(budgetId)
        .then(updatedBudget => {
          res.status(200).json({
            updatedBudget,
            message: `User Id: ${userId} - Relocation Budget id: ${budgetId} successfully removed`
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(404).json({
        message: `User Id: ${userId} - Relocation Budget id: ${budgetId} does not exist`
      });
    }
  });
});

module.exports = router;
