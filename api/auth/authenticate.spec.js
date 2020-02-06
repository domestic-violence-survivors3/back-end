const request = require("supertest");

const db = require("../../database/config/dbConfig");
const app = require("../../app");

describe("test enviroment", () => {
  it("should use the testing environment", () => {
    return expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("Users Model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("Registering new user", () => {
    it("registers user", async () => {
      request(app)
        .post("/auth/register")
        .send({ username: "Jack Ryan", password: "CIA" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("User is in Database", async () => {
      await request(app)
        .post("/auth/login")
        .send({ username: "Jack Ryan", password: "CIA" })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("User not in database", async () => {
      await request(app)
        .post("/api/auth/login")
        .send({ username: "Grinch", password: "StoleXmas" })
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});
