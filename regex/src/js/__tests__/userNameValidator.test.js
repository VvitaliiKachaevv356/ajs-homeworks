import Validator from "../userNameValidator";

describe("Validator", () => {
  const validator = new Validator();

  test("valid usernames", () => {
    expect(validator.validateUsername("user_name123")).toBe(true);
    expect(validator.validateUsername("user-name_123")).toBe(true);
    expect(validator.validateUsername("User123")).toBe(true);
    expect(validator.validateUsername("user-1")).toBe(true);
    expect(validator.validateUsername("user_1")).toBe(true);
  });

  test("invalid usernames", () => {
    expect(validator.validateUsername("user..name")).toBe(false);
    expect(validator.validateUsername("user@name")).toBe(false);
    expect(validator.validateUsername("-username")).toBe(false);
    expect(validator.validateUsername("_username")).toBe(false);
    expect(validator.validateUsername("123username")).toBe(false);
    expect(validator.validateUsername("username1234")).toBe(false);
    expect(validator.validateUsername("user1234name")).toBe(false);
    expect(validator.validateUsername("user---name")).toBe(false);
    expect(validator.validateUsername("user__name")).toBe(false);
  });
});