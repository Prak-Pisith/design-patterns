interface Logistic {
  doOperation();
}

class CarLogistic implements Logistic {
  doOperation() {
    console.log('Delivery on the road');
  }
}

class BoatLogistic implements Logistic {
  doOperation() {
    console.log('Delivery on the sea');
  }
}

enum OperationType {
  CAR = 'CAR',
  BOAT = 'BOAT'
}

class LogisticFactory {

  startOperationBy(type: OperationType): Logistic {
    switch (type) {
      case OperationType.CAR: return new CarLogistic();
      case OperationType.BOAT: return new BoatLogistic();
      default: throw new Error("Unknown OperationType: " + type);
    }
  }
}

// Using

const logisticFactory = new LogisticFactory();

const deliver1 = logisticFactory.startOperationBy(OperationType.CAR);
console.log(`deliver1: ${deliver1.doOperation()}`);

const deliver2 = logisticFactory.startOperationBy(OperationType.BOAT);
console.log(`deliver2: ${deliver2.doOperation()}`)
