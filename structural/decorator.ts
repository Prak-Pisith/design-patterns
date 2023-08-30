// Abstract class representing a beverage
abstract class Beverage {
  name: string|undefined;
  price: number|undefined;

  getDescription(): string {
    return `${this.name} beverage costs for ${this.price}`;
  }
}

// Concrete class representing a coffee
class Coffee extends Beverage {
  name: string =  'Coffee';
  price: number = 10;
}

// Decorator class representing milk
class MilkDecorator extends Beverage {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()} with milk`;
  }

  getPrice(): number {
    return Number(this.beverage.price) + 5;
  }
}

// Decorator class representing sugar
class SugarDecorator extends Beverage {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription(): string {
    return `${this.beverage.getDescription()} with Sugar`;
  }
  getPrice(): number {
    return Number(this.beverage.price) + 2;
  }
}

// Client Code
const coffee = new Coffee();
console.log(coffee.getDescription());

const milkCoffee = new MilkDecorator(coffee);
console.log(milkCoffee.getDescription());
console.log(milkCoffee.getPrice());

const sugarCoffee = new SugarDecorator(coffee);
console.log(sugarCoffee.getDescription());
console.log(sugarCoffee.getPrice());

