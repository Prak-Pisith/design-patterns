var CarLogistic = /** @class */ (function () {
    function CarLogistic() {
    }
    CarLogistic.prototype.doOperation = function () {
        console.log('Delivery on the road');
    };
    return CarLogistic;
}());
var BoatLogistic = /** @class */ (function () {
    function BoatLogistic() {
    }
    BoatLogistic.prototype.doOperation = function () {
        console.log('Delivery on the sea');
    };
    return BoatLogistic;
}());
var OperationType;
(function (OperationType) {
    OperationType["CAR"] = "CAR";
    OperationType["BOAT"] = "BOAT";
})(OperationType || (OperationType = {}));
var LogisticFactory = /** @class */ (function () {
    function LogisticFactory() {
    }
    LogisticFactory.prototype.startOperationBy = function (type) {
        switch (type) {
            case OperationType.CAR: return new CarLogistic();
            case OperationType.BOAT: return new BoatLogistic();
            default: throw new Error("Unknown OperationType: " + type);
        }
    };
    return LogisticFactory;
}());
// Using
var logisticFactory = new LogisticFactory();
var deliver1 = logisticFactory.startOperationBy(OperationType.CAR);
console.log("deliver1: ".concat(deliver1.doOperation()));
var deliver2 = logisticFactory.startOperationBy(OperationType.BOAT);
console.log("deliver2: ".concat(deliver2.doOperation()));
