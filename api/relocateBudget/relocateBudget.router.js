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

router.put("/:id/relocate", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Relocate.update(body, id).then(data => {
    res.status(200).json({ data });
  });
});

router.delete("/:id/relocate", (req, res) => {
  const { id } = req.params;

  Relocate.remove(id).then(deleted => {
    res.status(200).json({ deleted });
  });
});

module.exports = router;
