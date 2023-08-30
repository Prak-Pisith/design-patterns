// Prototype Interface
interface Shape {
  x: number;
  y: number;
  clone(): Shape;
  draw(): void;
}

// Concrete Prototype Class
class Triangle implements Shape {

  constructor(public x: number, public y: number) {};

  clone(): Shape {
    return new Triangle(this.x, this.y);
  }

  draw(): void {
    console.log('Drawing Triangle ...');
  }
}

const triaglePrototype = new Triangle(0,0);

const myTriangle = triaglePrototype.clone();
console.log(myTriangle);

