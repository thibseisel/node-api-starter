import supertest from "supertest"
import app from "../../src/app"

describe("/public/token endpoint", () => {
  const ENDPOINT_URL = "/api/public/token"

  it("should generate an access token when authentication is successful", async () => {
    await supertest(app)
      .post(ENDPOINT_URL)
      .send({ username: "root", password: "root" })
      .expect(201)
      .expect((res) =>
        expect(res.body).toEqual({
          token: expect.any(String),
          expiresIn: 3600,
        })
      )
  })

  it("should fail with Unauthorized when authentication failed", async () => {
    await supertest(app)
      .post(ENDPOINT_URL)
      .send({ username: "root", password: "wrong_password" })
      .expect(401, {
        message: "Unauthorized",
      })
  })

  describe("should fail with badRequest when", () => {
    test("username is missing", async () => {
      await supertest(app)
        .post(ENDPOINT_URL)
        .send({ password: "root" })
        .expect(400, {
          message:
            'Invalid value for property "username": it should be a string',
        })
    })

    test("password is missing", async () => {
      await supertest(app)
        .post(ENDPOINT_URL)
        .send({ username: "root" })
        .expect(400, {
          message:
            'Invalid value for property "password": it should be a string',
        })
    })
  })
})
