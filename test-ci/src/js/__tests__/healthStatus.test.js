import { getHealthStatus } from "../healtStatus";

test("health > 50", () => {
  expect(getHealthStatus({ name: "Маг", health: 90 })).toBe("healthy");
});

test("50 > health > 15", () => {
  expect(getHealthStatus({ name: "Чернокнижник", health: 40 })).toBe("wounded");
});

test("health < 15", () => {
  expect(getHealthStatus({ name: "Паладин", health: 10 })).toBe("critical");
});
