const { add } = require("./personalBudget.model");

const db = require("../../database/config/dbConfig");

describe("personal budget model", () => {
  it("adds new personal budget", async function() {
    await add(
      {
        transportation: 555,
        food: 55,
        healthInsurance: 55,
        carInsurance: 555,
        healthCare: 55,
        carLoans: 555,
        personalLoans: 555,
        other: 555
      },
      1
    );

    const personal = await db("personalBudget");
    expect(personal).toHaveLength(1);
  });
});
