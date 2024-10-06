import ErrorRepository from "../errorRepository";
test("should return error description by code", () => {
  const errors = new ErrorRepository();
  errors.addError(404, "Not Found");
  expect(errors.translate(404)).toBe("Not Found");
});
test('should return "Unknown error" for unknown code', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(999)).toBe("Unknown error");
});
