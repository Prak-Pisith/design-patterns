'use strict';

class Teddy {
  private static instance: Teddy | null = null;

  // 1. Make default constructor private
  private constructor() {
    // private constructor means that Teddy cannot be created from outside.
  }

  // 2. Static creation methods that act as constructor
  // call private constructor to create object and save it in a static field.
  static getTeddy(): Teddy {
    if (!Teddy.instance) {
      Teddy.instance = new Teddy();
    }
    return Teddy.instance;
  }

  play(): void {
    console.log('Play with Teddy !!!');
  }
}

// Using Teddy
const teddy1 = Teddy.getTeddy();
const teddy2 = Teddy.getTeddy();

console.log(teddy1 === teddy2);
teddy1.play();
teddy2.play();