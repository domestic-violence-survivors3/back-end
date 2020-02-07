const request = require("supertest");

const app = require("../../app");

describe("GET relocation budget", () => {
  it("relocateBudget", async () => {
    request(app)
      .get("/1/relocate")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
