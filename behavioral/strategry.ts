interface MovementStrategy {
  move(): void;
}

class WalkingMovement implements MovementStrategy {
  move(): void {
    console.log('Walking...');
  }
}

class SwimmingMovement implements MovementStrategy {
  move(): void {
    console.log('Swimming...');
  }
}

class FlyingMovement implements MovementStrategy {
  move(): void {
    console.log('Flying...');
  }
}

class Character {
  private movementStrategy: MovementStrategy;

  setMovementStrategy(movementStrategy: MovementStrategy): void {
    this.movementStrategy = movementStrategy;
  }

  move(): void {
    if (!this.movementStrategy) {
      console.log(`Character doesn't know how to move!`);
    }
    this.movementStrategy.move();
  }
}

const character = new Character();

character.setMovementStrategy(new WalkingMovement());
character.move();

character.setMovementStrategy(new SwimmingMovement());
character.move();

character.setMovementStrategy(new FlyingMovement());
character.move();