'use strict';
var Teddy = /** @class */ (function () {
    // 1. Make default constructor private
    function Teddy() {
        // private constructor means that Teddy cannot be created from outside.
    }
    // 2. Static creation methods that act as constructor
    // call private constructor to create object and save it in a static field.
    Teddy.getTeddy = function () {
        if (!Teddy.instance) {
            Teddy.instance = new Teddy();
        }
        return Teddy.instance;
    };
    Teddy.prototype.play = function () {
        console.log('Play with Teddy !!!');
    };
    Teddy.instance = null;
    return Teddy;
}());
// Using Teddy
var teddy1 = Teddy.getTeddy();
var teddy2 = Teddy.getTeddy();
console.log(teddy1 === teddy2);
teddy1.play();
teddy2.play();
