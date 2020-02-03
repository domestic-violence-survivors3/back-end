exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("relocateBudget")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("relocateBudget").insert([
        {
          id: 1,
          hotelCosts: 100,
          rentlaDeposit: 300,
          utilities: 100,
          storage: 100,
          rent: 600,
          carRental: 150,
          gas: 100,
          cellphoneFees: 75,
          movingTruck: 90,
          mentalHealth: 100,
          incomeLoss: 200,
          other: 250,
          user_id: 1
        },
        {
          id: 2,
          hotelCosts: 100,
          rentlaDeposit: 300,
          utilities: 100,
          storage: 100,
          rent: 600,
          carRental: 150,
          gas: 100,
          cellphoneFees: 75,
          movingTruck: 90,
          mentalHealth: 50,
          incomeLoss: 100,
          other: 500,
          user_id: 2
        },
        {
          id: 3,
          hotelCosts: 100,
          rentlaDeposit: 300,
          utilities: 100,
          storage: 100,
          rent: 600,
          carRental: 150,
          gas: 100,
          cellphoneFees: 75,
          movingTruck: 90,
          mentalHealth: 300,
          incomeLoss: 400,
          other: 600,
          user_id: 3
        }
      ]);
    });
};
