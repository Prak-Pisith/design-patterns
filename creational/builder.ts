// 1. Define a Blueprint (Product)

class Car {
  constructor(
    public model: string,
    public engine: string,
    public hasSunRoof: boolean,
    public hasGPS: boolean
  ) {}
}

// 2. Create a Builder
class CarBuilder {
  private model: string = 'Base Model';
  private engine: string = 'Base Engine';
  private hasSunRoof: boolean = false;
  private hasGPS: boolean = false;

  setModel(model: string) {
    this.model = model;
    return this;
  }

  setEngine(engine: string) {
    this.engine = engine;
    return this;
  }

  addSunRoof() {
    this.hasSunRoof = true;
    return this;
  }

  addGPS() {
    this.hasGPS = true;
    return this;
  }

  build(): Car {
    return new Car(this.model, this.engine, this.hasSunRoof, this.hasGPS);
  }
}

// Using Builder

const carBuilder = new CarBuilder();

const baseCar = carBuilder.build();
const luxuryCar = carBuilder
  .setModel('Top Model')
  .setEngine('Top Engine')
  .addSunRoof()
  .addGPS()
  .build();

console.log(baseCar);
console.log(luxuryCar);