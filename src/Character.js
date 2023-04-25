export default class Character {
  constructor(health = 1000) {
    this.health = health;
    this.healthbarColor = 'green';
    this.alive = true;
  }

  takeDamage(damageAmount) {
    this.health -= damageAmount;
    if (this.health < 1) {
      this.alive = false;
      this.health = 0;
    }
  }

  dealDamage(damageAmount, targetCharacter) {
    targetCharacter.takeDamage(damageAmount);
  }

  setHealthInPercent(healthPercent) {}

  changeHealthBarColor() {}
}
