import getSpecialAttacks from "../specialAttacks";

const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // описание "засекречено"
    },
  ],
};
test("should return special attacks with descriptions", () => {
  const expected = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];
  expect(getSpecialAttacks(character)).toEqual(expected);
});
test("should handle empty special array", () => {
  const emptyCharacter = { ...character, special: [] };
  expect(getSpecialAttacks(emptyCharacter)).toEqual([]);
});
test("should handle missing description in all attacks", () => {
  const noDescriptionCharacter = {
    ...character,
    special: [
      { id: 1, name: "Атака без описания", icon: "http://..." },
      { id: 2, name: "Еще одна атака", icon: "http://..." },
    ],
  };
  const expected = [
    {
      id: 1,
      name: "Атака без описания",
      icon: "http://...",
      description: "Описание недоступно",
    },
    {
      id: 2,
      name: "Еще одна атака",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];
  expect(getSpecialAttacks(noDescriptionCharacter)).toEqual(expected);
});
