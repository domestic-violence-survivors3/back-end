exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("personalBudget").then(function() {
    // Inserts seed entries
    return knex("personalBudget").insert([
      {
        id: 1,
        transportation: 100,
        food: 50,
        healthInsurance: 75,
        carInsurance: 115,
        healthCare: 90,
        carLoans: 397,
        personalLoans: 233,
        other: 400,
        user_id: 1
      },
      {
        id: 2,
        transportation: 200,
        food: 50,
        healthInsurance: 75,
        carInsurance: 115,
        healthCare: 90,
        carLoans: 397,
        personalLoans: 233,
        other: 400,
        user_id: 2
      },
      {
        id: 3,
        transportation: 300,
        food: 50,
        healthInsurance: 75,
        carInsurance: 115,
        healthCare: 90,
        carLoans: 397,
        personalLoans: 233,
        other: 400,
        user_id: 3
      }
    ]);
  });
};
