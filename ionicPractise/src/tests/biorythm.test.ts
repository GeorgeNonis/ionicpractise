import { calculateBiorythms } from "../utils";

it("calculates the physical biometric", () => {
  const physical = calculateBiorythms("123123");

  expect(physical).toBe(1000);
});
