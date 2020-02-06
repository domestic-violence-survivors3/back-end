const request = require("supertest");

const app = require("../app");

describe("index.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(app).get("/");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = {
        Server: "Hi, I'm your Server.  Can I start you off with a drink?"
      };
      const response = await request(app).get("/");
      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object from the index route", async () => {
      const response = await request(app).get("/");
      expect(response.type).toEqual("application/json");
    });
  });
});
