const router = require("express").Router();
const Personal = require("./personalBudget.model");

router.get("/:id/personal", (req, res) => {
  const { id } = req.params;

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

router.put("/:id/personal", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Personal.update(body, id).then(data => {
    res.status(200).json({ data });
  });
});

router.delete("/:id/personal", (req, res) => {
  const { id } = req.params;

  Personal.remove(id).then(deleted => {
    res.status(200).json({ deleted });
  });
});

module.exports = router;
