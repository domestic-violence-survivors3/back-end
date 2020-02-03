exports.up = function(knex) {
  return knex.schema.createTable("relocateBudget", tbl => {
    tbl.increments();

    tbl.integer("hotelCosts", 5);
    tbl.integer("rentlaDeposit", 5);
    tbl.integer("utilities", 5);
    tbl.integer("storage", 5);
    tbl.integer("rent", 5);
    tbl.integer("carRental", 5);
    tbl.integer("gas", 5);
    tbl.integer("cellphoneFees", 5);
    tbl.integer("movingTruck", 5);
    tbl.integer("mentalHealth", 5);
    tbl.integer("incomeLoss", 5);
    tbl.integer("other", 5);
    tbl.integer("user_id", 5);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("relocate");
};
