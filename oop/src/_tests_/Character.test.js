import Character from "../Character";

describe("Character class", () => {
  test("should create a character with valid name and type", () => {
    const character = new Character("Hero", "Bowerman");
    expect(character.name).toBe("Hero");
    expect(character.type).toBe("Bowerman");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test("should throw error for invalid name length", () => {
    expect(() => new Character("H", "Bowerman")).toThrow("Invalid name length");
    expect(() => new Character("VeryLongName", "Bowerman")).toThrow(
      "Invalid name length"
    );
  });

  test("should throw error for invalid character type", () => {
    expect(() => new Character("Hero", "InvalidType")).toThrow(
      "Invalid character type"
    );
  });

  test("should level up character", () => {
    const character = new Character("Hero", "Bowerman");
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(30);
    expect(character.defence).toBeCloseTo(30);
    expect(character.health).toBe(100);
  });

  it("should throw an error if character is dead", () => {
    const character = new Character("Jane", "Swordsman");
    character.health = 0;

    expect(() => character.levelUp()).toThrow(
      "Cannot level up a dead character"
    );
  });

  test("should reduce health on damage", () => {
    const character = new Character("Hero", "Bowerman");
    character.damage(30);
    expect(character.health).toBe(70);
    character.damage(80);
    expect(character.health).toBe(0);
  });
});
