var NighLight = /** @class */ (function () {
    function NighLight() {
    }
    NighLight.prototype.turnOn = function () {
        console.log('NighLight is ON');
    };
    NighLight.prototype.turnOff = function () {
        console.log('NighLight is OFF');
    };
    return NighLight;
}());
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
    }
    MusicPlayer.prototype.play = function () {
        console.log('Playing music');
    };
    MusicPlayer.prototype.stop = function () {
        console.log('Stopping music');
    };
    return MusicPlayer;
}());
var CozyRoomFacade = /** @class */ (function () {
    function CozyRoomFacade() {
        this.nightLight = new NighLight();
        this.musicPlayer = new MusicPlayer();
    }
    CozyRoomFacade.prototype.makeCozy = function () {
        this.nightLight.turnOn();
        this.musicPlayer.play();
        console.log('The room is cozy now. enjoy and chill !!!');
    };
    CozyRoomFacade.prototype.stopCozy = function () {
        this.nightLight.turnOff();
        this.musicPlayer.stop();
        console.log('The room is stopped cozy now. end !!!');
    };
    return CozyRoomFacade;
}());
var myRoom = new CozyRoomFacade();
myRoom.makeCozy();
