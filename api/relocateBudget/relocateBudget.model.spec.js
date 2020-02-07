const { add } = require("./relocateBudget.model");

const db = require("../../database/config/dbConfig");

describe("Relocation Model", () => {
  describe("Relocation Budget", () => {
    it("Adds new relocation budget", async function() {
      await add(
        {
          hotelCosts: 100,
          rentalDeposit: 100,
          utilities: 100,
          storage: 100,
          rent: 600,
          carRental: 150,
          gas: 100,
          cellphoneFees: 75,
          movingTruck: 90,
          mentalHealth: 100,
          incomeLoss: 200,
          other: 999
        },
        1
      );

      const personal = await db("relocateBudget");
      expect(personal).toHaveLength(1);
    });
  });
});
