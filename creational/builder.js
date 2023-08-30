// 1. Define a Blueprint (Product)
var Car = /** @class */ (function () {
    function Car(model, engine, hasSunRoof, hasGPS) {
        this.model = model;
        this.engine = engine;
        this.hasSunRoof = hasSunRoof;
        this.hasGPS = hasGPS;
    }
    return Car;
}());
// 2. Create a Builder
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.model = 'Base Model';
        this.engine = 'Base Engine';
        this.hasSunRoof = false;
        this.hasGPS = false;
    }
    CarBuilder.prototype.setModel = function (model) {
        this.model = model;
        return this;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    CarBuilder.prototype.addSunRoof = function () {
        this.hasSunRoof = true;
        return this;
    };
    CarBuilder.prototype.addGPS = function () {
        this.hasGPS = true;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return new Car(this.model, this.engine, this.hasSunRoof, this.hasGPS);
    };
    return CarBuilder;
}());
// Using Builder
var carBuilder = new CarBuilder();
var baseCar = carBuilder.build();
var luxuryCar = carBuilder
    .setModel('Top Model')
    .setEngine('Top Engine')
    .addSunRoof()
    .addGPS()
    .build();
console.log(baseCar);
console.log(luxuryCar);
