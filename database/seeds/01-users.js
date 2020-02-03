exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        { id: 1, username: "user", password: "pass" }
      ]);
    });
};
