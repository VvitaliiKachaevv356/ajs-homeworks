import orderByProps from "../orderByProps";

describe("orderByProps", () => {
  test("should return properties in specified order and alphabetically", () => {
    const obj = {
      name: "мечник",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const order = ["name", "level"];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
    ]);
  });

  test("should handle empty object", () => {
    const obj = {};
    const order = ["name", "level"];

    const result = orderByProps(obj, order);

    expect(result).toEqual([]);
  });

  test("should handle empty order array", () => {
    const obj = { name: "мечник", health: 10 };
    const order = [];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: "health", value: 10 },
      { key: "name", value: "мечник" },
    ]);
  });

  test("should handle all properties in order array", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const order = ["a", "b", "c"];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: "a", value: 1 },
      { key: "b", value: 2 },
      { key: "c", value: 3 },
    ]);
  });

  test("should handle non-existing keys in order array", () => {
    const obj = { name: "мечник", health: 10 };
    const order = ["name", "level"];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: "name", value: "мечник" },
      { key: "health", value: 10 },
    ]);
  });
});
