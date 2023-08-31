// States Interface
interface VendingMachineState {
  insertCoin(): void;
  selectItem(): void;
  dispenseItem(): void;
}

// Concrete States
class MachineReadyState implements VendingMachineState {

  insertCoin(): void {
    console.log(`Coin inserted`);
  }

  selectItem(): void {
    console.log(`Item selected`);
  }

  dispenseItem(): void {
    console.log(`Please select an item first !!!`)
  }
}

class DispensingState implements VendingMachineState {
  insertCoin(): void {
    console.log(`Coin inserted, but currently dispending item`);
  }

  selectItem(): void {
    console.log(`Item is already selected, Please wait for the current item to be dispensed`);
  }

  dispenseItem(): void {
    console.log(`Item dispensed, Enjoy :)`);
  }
}

class OutOfStockState implements VendingMachineState {
  insertCoin() {
    console.log("Coin inserted, but machine is out of stock.");
  }

  selectItem() {
    console.log("Machine is out of stock. Please come back later.");
  }

  dispenseItem() {
    console.log("Machine is out of stock. No item to dispense.");
  }
}

// Vending machine context
class VendingMachine {
  private currentState: VendingMachineState = new MachineReadyState();

  setState(state: VendingMachineState) {
    this.currentState = state;
  }

  insertCoin() {
    this.currentState.insertCoin();
  }

  selectItem() {
    this.currentState.selectItem();
  }

  dispenseItem() {
    this.currentState.dispenseItem();
  }
}

// Using the State Design Pattern
const vendingMachine = new VendingMachine();

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