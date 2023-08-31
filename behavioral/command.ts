interface Commands {
  execute(): void;
}

// Concrete Classes
class LightOnCommand implements Commands {
  execute(): void {
    console.log('Light is turned on');
  }
}

class DoorOpenCommand implements Commands {
  execute(): void {
    console.log('Door is opened');
  }
}

class MusicPlayCommand implements Commands {
  execute(): void {
    console.log('Music is playing');
  }
}

// Command Class

// Tip: Can be Singleton or Non-Singleton based on requirement 
class RemoteControl {

  private command: Commands | null = null;

  setCommand(command: Commands) {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log('No command set');
    }
  }
}

// Remove instance
const remoteControl = new RemoteControl();

// command list
const lightOn = new LightOnCommand();
remoteControl.setCommand(lightOn);
remoteControl.pressButton();

const musicPlay = new MusicPlayCommand();
remoteControl.setCommand(musicPlay);
remoteControl.pressButton();

// ... 