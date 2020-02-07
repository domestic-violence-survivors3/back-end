const request = require("supertest");

const app = require("../../app");

describe("GET personal budget", () => {
  it("personalBudget", async () => {
    request(app)
      .get("/1/personal")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
