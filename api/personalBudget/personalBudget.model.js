const db = require("../../database/config/dbConfig");

module.exports = {
  findById,
  findByUserId,
  add,
  update,
  remove
};

function findById(id) {
  return db("personalBudget")
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db("personalBudget").where({ user_id: userId });
  // .first();
}

function add(budget, userId) {
  return db("personalBudget")
    .insert({ ...budget, user_id: userId })
    .then(ids => {
      const id = ids[0];

      return db("personalBudget")
        .where({ id })
        .first()
        .then(budgets => {
          return budgets;
        });
    });
}

// FIXME:
function update(changes) {
  return db("personalBudget as pb")
    .update({ changes })
    .then(ids => {
      const id = ids[0];

      return db("personalBudget")
        .where({ id })
        .first()
        .then(budgets => {
          return budgets;
        });
    });
}

// FIXME:
function remove(id) {
  return db("personalBudget")
    .where({ id })
    .del();
}
