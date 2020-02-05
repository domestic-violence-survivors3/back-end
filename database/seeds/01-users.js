exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      { id: 1, username: "user", password: "pass" },
      { id: 2, username: "shane", password: "pass" },
      { id: 3, username: "rachel", password: "pass" }
    ]);
  });
};
