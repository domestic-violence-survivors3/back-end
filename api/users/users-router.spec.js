const request = require("supertest");

const app = require("../../app");

describe("GET /", function() {
  it("should return 200 OK", function() {
    return request(app)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should return JSON", function() {
    return request(app)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it("should return JSON", function() {
    return request(app)
      .get("/")
      .then(res => {
        expect(res.body.api).toBe("up");
      });
  });
});
