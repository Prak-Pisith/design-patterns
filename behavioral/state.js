// Concrete States
var MachineReadyState = /** @class */ (function () {
    function MachineReadyState() {
    }
    MachineReadyState.prototype.insertCoin = function () {
        console.log("Coin inserted");
    };
    MachineReadyState.prototype.selectItem = function () {
        console.log("Item selected");
    };
    MachineReadyState.prototype.dispenseItem = function () {
        console.log("Please select an item first !!!");
    };
    return MachineReadyState;
}());
var DispensingState = /** @class */ (function () {
    function DispensingState() {
    }
    DispensingState.prototype.insertCoin = function () {
        console.log("Coin inserted, but currently dispending item");
    };
    DispensingState.prototype.selectItem = function () {
        console.log("Item is already selected, Please wait for the current item to be dispensed");
    };
    DispensingState.prototype.dispenseItem = function () {
        console.log("Item dispensed, Enjoy :)");
    };
    return DispensingState;
}());
var OutOfStockState = /** @class */ (function () {
    function OutOfStockState() {
    }
    OutOfStockState.prototype.insertCoin = function () {
        console.log("Coin inserted, but machine is out of stock.");
    };
    OutOfStockState.prototype.selectItem = function () {
        console.log("Machine is out of stock. Please come back later.");
    };
    OutOfStockState.prototype.dispenseItem = function () {
        console.log("Machine is out of stock. No item to dispense.");
    };
    return OutOfStockState;
}());
// Vending machine context
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.currentState = new MachineReadyState();
    }
    VendingMachine.prototype.setState = function (state) {
        this.currentState = state;
    };
    VendingMachine.prototype.insertCoin = function () {
        this.currentState.insertCoin();
    };
    VendingMachine.prototype.selectItem = function () {
        this.currentState.selectItem();
    };
    VendingMachine.prototype.dispenseItem = function () {
        this.currentState.dispenseItem();
    };
    return VendingMachine;
}());
// Using the State Design Pattern
var vendingMachine = new VendingMachine();
// Ready State (Default)
console.log('=============== Machine ready state =======================');
vendingMachine.insertCoin();
vendingMachine.selectItem();
vendingMachine.dispenseItem();
// Change state => DispensingState
vendingMachine.setState(new DispensingState());
console.log('=============== Dispensing state =======================');
vendingMachine.insertCoin();
vendingMachine.selectItem();
vendingMachine.dispenseItem();
// Change state => OutOfStockState
vendingMachine.setState(new OutOfStockState());
console.log('=============== Out of stock state =======================');
vendingMachine.insertCoin();
vendingMachine.selectItem();
vendingMachine.dispenseItem();
