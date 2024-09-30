export default class Character {
  static stats = {
    Bowerman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
  };
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Invalid name length");
    }
    const types = Object.keys(Character.stats);
    if (!types.includes(type)) {
      throw new Error("Invalid character type");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = Character.stats[type].attack;
    this.defence = Character.stats[type].defence;
  }
  levelUp() {
    if (this.health <= 0) {
      throw new Error("Cannot level up a dead character");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points;
    if (this.health < 0) this.health = 0;
  }
}
