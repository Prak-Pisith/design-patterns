var WalkingMovement = /** @class */ (function () {
    function WalkingMovement() {
    }
    WalkingMovement.prototype.move = function () {
        console.log('Walking...');
    };
    return WalkingMovement;
}());
var SwimmingMovement = /** @class */ (function () {
    function SwimmingMovement() {
    }
    SwimmingMovement.prototype.move = function () {
        console.log('Swimming...');
    };
    return SwimmingMovement;
}());
var FlyingMovement = /** @class */ (function () {
    function FlyingMovement() {
    }
    FlyingMovement.prototype.move = function () {
        console.log('Flying...');
    };
    return FlyingMovement;
}());
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.setMovementStrategy = function (movementStrategy) {
        this.movementStrategy = movementStrategy;
    };
    Character.prototype.move = function () {
        if (!this.movementStrategy) {
            console.log("Character doesn't know how to move!");
        }
        this.movementStrategy.move();
    };
    return Character;
}());
var character = new Character();
character.setMovementStrategy(new WalkingMovement());
character.move();
character.setMovementStrategy(new SwimmingMovement());
character.move();
character.setMovementStrategy(new FlyingMovement());
character.move();
