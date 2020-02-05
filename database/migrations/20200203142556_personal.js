exports.up = function(knex) {
  return knex.schema.createTable("personalBudget", tbl => {
    tbl.increments();

    tbl.integer("transportation", 5);
    tbl.integer("food", 5);
    tbl.integer("healthInsurance", 5);
    tbl.integer("carInsurance", 5);
    tbl.integer("healthCare", 5);
    tbl.integer("carLoans", 5);
    tbl.integer("personalLoans", 5);
    tbl.integer("other", 5);
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("personal");
};
