import Character from '../src/Character';

describe('Given a character', () => {
  it('with 900 HP!', () => {
    const characterAlive = new Character(900);
    expect(characterAlive.alive).toBe(true);
  });

  it('with 900 HP!', () => {
    const characterGreen = new Character(900);
    expect(characterGreen.healthbarColor).toBe('green');
  });

  it('starts with 1000 hp when no argument is passed.', () => {
    const characterDefault = new Character();
    expect(characterDefault.health).toBe(1000);
  });

  it.each([
    [0, true],
    [999, true],
    [1000, false],
    [1001, false],
  ])(
    "should die, when it takes damage exceeding it's health.",
    (damage, isAlive) => {
      const characterDefault = new Character();
      characterDefault.takeDamage(damage);
      expect(characterDefault.alive).toBe(isAlive);
    }
  );

  it('receives damage, then health is reduced by the damage amount.', () => {
    const characterDefault = new Character();

    characterDefault.takeDamage(500);

    expect(characterDefault.health).toBe(500);
  });

  it('deals damage to an other character then the other character takes damage of the same amount.', () => {
    const characterDefault = new Character();
    const characterEnemy = new Character();

    characterDefault.dealDamage(500, characterEnemy);

    expect(characterEnemy.health).toBe(500);
  });
});

describe('Given a character health display', () => {
  it.each([
    ['green', 100],
    ['green', 75],
    ['green', 50],
    ['orange', 49],
    // ['orange', 30],
    // ['orange', 25],
    // ['red', 24],
    // ['red', 20],
    // ['red', 10],
    // ['black', 0],
  ])(
    'should be %s if character health is %s %.',
    (expectedHealthbarColor, healthPercent) => {
      const characterDefault = new Character(10 * healthPercent);

      // characterDefault.setHealthInPercent(healthPercent);

      expect(characterDefault.healthbarColor).toBe(expectedHealthbarColor);
    }
  );
});
