// Template Method Design Pattern

abstract class CharacterTemplate {

  abstract selectSkills(): void;
  abstract selectWeapon(): void;
  customizeCharacter(): void {
    console.log('Character Customization Completed');
  }

  createCharacter(): void {
    this.selectSkills();
    this.selectWeapon();
    this.customizeCharacter();
  }
}

class WarriorCharacter extends CharacterTemplate {
  selectSkills(): void {
    console.log(`Selected strong and defensive skills.`);
  }

  selectWeapon(): void {
    console.log(`Equipped with a mighty sword.`)
  }
}

class MageCharacter extends CharacterTemplate {
  selectSkills(): void {
    console.log('Selected magical spells and abilities.')
  }
  
  selectWeapon(): void {
    console.log('Holding a staff for casting spells.')
  }
}

// Using Template Method

const warrior = new WarriorCharacter();
console.log('Building Warrior =====>');
warrior.createCharacter();

const mage = new MageCharacter();
console.log('Building Mage =====>');
mage.createCharacter();