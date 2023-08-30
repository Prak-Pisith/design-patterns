// Concrete Prototype Class
var Triangle = /** @class */ (function () {
    function Triangle(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Triangle.prototype.clone = function () {
        return new Triangle(this.x, this.y);
    };
    Triangle.prototype.draw = function () {
        console.log('Drawing Triangle ...');
    };
    return Triangle;
}());
var triaglePrototype = new Triangle(0, 0);
var myTriangle = triaglePrototype.clone();
console.log(myTriangle);
