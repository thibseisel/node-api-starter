import { delay } from "../../src/core/delay"

jest.useFakeTimers()

describe("Delay", () => {
  it("should resolve after duration has elapsed", async () => {
    const waitHalfSecond = delay(500)
    jest.advanceTimersByTime(500)
    await expect(waitHalfSecond).resolves.toBeUndefined()
  })

  it("should resolve immediately when delay is 0", async () => {
    const noDelay = delay(0)
    await expect(noDelay).resolves.toBeUndefined()
  })

  describe("should fail when", () => {
    it("duration is negative", async () => {
      expect(() => delay(-200)).toThrow(
        "Delay should be a positive number of milliseconds, but was -200"
      )
    })
  })
})
