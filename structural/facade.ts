interface ILightball {
  turnOn(): void;
  turnOff(): void;
}
interface ICDPlayer {
  play(): void;
  stop(): void;
}

class NighLight implements ILightball {
  turnOn(): void {
    console.log('NighLight is ON');
  }
  turnOff(): void {
    console.log('NighLight is OFF');
  }
}

class MusicPlayer implements ICDPlayer {
  play(): void {
    console.log('Playing music');
  }
  stop(): void {
    console.log('Stopping music');
  }
}

class CozyRoomFacade {
  private nightLight: NighLight;
  private musicPlayer: MusicPlayer;

  constructor() {
    this.nightLight = new NighLight();
    this.musicPlayer = new MusicPlayer();
  }

  makeCozy() {
    this.nightLight.turnOn();
    this.musicPlayer.play();
    console.log('The room is cozy now. enjoy and chill !!!');
  }

  stopCozy() {
    this.nightLight.turnOff();
    this.musicPlayer.stop();
    console.log('The room is stopped cozy now. end !!!');
  }

}

const myRoom = new CozyRoomFacade();

myRoom.makeCozy();