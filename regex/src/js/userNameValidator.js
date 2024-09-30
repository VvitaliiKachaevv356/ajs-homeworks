export default class Validator {
  validateUsername(userName) {
    return /^[a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z](?:(?!\d{4})[a-zA-Z0-9-_]){2,}[\d-_]$/.test(
      userName
    );
  }
}
