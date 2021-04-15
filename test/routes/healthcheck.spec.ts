import supertest from "supertest"
import app from "../../src/app"

describe("/public/healthcheck endpoint", () => {
  const ENDPOINT_URL = "/api/healthcheck"

  it("should respond with 200 OK when called", async () => {
    await supertest(app).get(ENDPOINT_URL).expect(200, "OK")
  })
})
