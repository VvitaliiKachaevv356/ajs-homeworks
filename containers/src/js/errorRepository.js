export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  addError(code, description) {
    this.errorMap.set(code, description);
  }

  translate(code) {
    return this.errorMap.get(code) || "Unknown error";
  }
}
