import { Character, Team } from "../Team";

test("should add character to the team", () => {
  const team = new Team();
  const character = new Character("Warrior", 1);
  team.add(character);
  expect(team.toArray()).toContain(character);
});

test("should throw error when adding duplicated character", () => {
  const team = new Team();
  const character = new Character("Warrior", 1);
  team.add(character);
  expect(() => team.add(character)).toThrow(
    "The character has already been added"
  );
});

test("should add multiple characters to the team", () => {
  const team = new Team();
  const character1 = new Character("Warrior", 1);
  const character2 = new Character("Mage", 2);
  team.addAll(character1, character2);
  expect(team.toArray()).toContain(character1);
  expect(team.toArray()).toContain(character2);
});
