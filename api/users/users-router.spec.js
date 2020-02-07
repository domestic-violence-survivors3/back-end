const request = require("supertest");

const app = require("../../app");

describe("GET user by id", () => {
  it("registers user", async () => {
    request(app)
      .post("/auth/register")
      .send({ username: "Shane", password: "pass" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });

  it("log into user to get user id", async () => {
    await request(app)
      .post("/auth/login")
      .send({ username: "Shane", password: "pass" })
      .then(async res => {
        await request(app)
          .get("/users/2")
          .set("authorization", res.body.token)
          .then(data => {
            const { id } = data.body.user;
            expect(id).toBe(2);
          });
      });
  });
});
