export function getHealthStatus(character) {
  const { health } = character;
  if (health > 50) {
    return "healthy";
  } else if (health > 15 && health <= 50) {
    return "wounded";
  } else {
    return "critical";
  }
}