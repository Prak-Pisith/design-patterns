// Adaptee: Different types of device chargers
class SmartPhoneCharger {
  chargeSmartPhone(): void {
    console.log("Charging smartphone ...");
  }
}

class TabletCharger {
  chargeTablet(): void {
    console.log("Charging Tablet ...");
  }
}

class LaptopCharger {
  chargeLaptop(): void {
    console.log("Charging Laptop ...");
  }
}

// Target: Universal charging station
interface UniversalCharger {
  chargeDevice(): void;
}

// Adapter for smartphone charging
class SmartPhoneAdapter implements UniversalCharger {
  private smartphoneCharger: SmartPhoneCharger;

  constructor(smartphoneCharger: SmartPhoneCharger) {
    this.smartphoneCharger = smartphoneCharger;
  }
  // Override
  chargeDevice(): void {
    this.smartphoneCharger.chargeSmartPhone();
  }
}

// Adapter for tablet charging
class TabletAdapter implements UniversalCharger {
  private tabletCharger: TabletCharger;

  constructor(tabletCharger: TabletCharger) {
    this.tabletCharger = tabletCharger;
  }

  // Override
  chargeDevice(): void {
    this.tabletCharger.chargeTablet();
  }
}

// Adapter for Laptop charging
class LaptopAdapter implements UniversalCharger {
  private laptopCharger: LaptopCharger;
  constructor(laptopCharger: LaptopCharger) {
    this.laptopCharger = laptopCharger;
  }

  // Override
  chargeDevice(): void {
    this.laptopCharger.chargeLaptop();
  }
}

// Using the adapters and universal charger

const smartphoneCharger = new SmartPhoneCharger();
const smartphoneAdapter = new SmartPhoneAdapter(smartphoneCharger);

const tabletCharger = new TabletCharger();
const tabletAdapter = new TabletAdapter(tabletCharger);

const laptopCharger = new LaptopCharger();
const laptopAdapter = new LaptopAdapter(laptopCharger);


function chargeAllDevices (universalCharger: UniversalCharger) {
  console.log('Pluggin in device ...');
  universalCharger.chargeDevice();
  console.log('Device charged!!!');
}

chargeAllDevices(smartphoneAdapter);
chargeAllDevices(tabletAdapter);
chargeAllDevices(laptopAdapter);