/**
 * Wait for a given time duration to elapse before resuming execution.
 * @param durationMs Duration to wait before resolving the returned promise, in milliseconds.
 */
export function delay(durationMs: number): Promise<void> {
  if (durationMs < 0) {
    throw RangeError(
      `Delay should be a positive number of milliseconds, but was ${durationMs}`
    )
  }
  if (durationMs === 0) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(), durationMs)
  })
}
