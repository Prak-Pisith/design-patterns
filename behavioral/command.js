// Concrete Classes
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand() {
    }
    LightOnCommand.prototype.execute = function () {
        console.log('Light is turned on');
    };
    return LightOnCommand;
}());
var DoorOpenCommand = /** @class */ (function () {
    function DoorOpenCommand() {
    }
    DoorOpenCommand.prototype.execute = function () {
        console.log('Door is opened');
    };
    return DoorOpenCommand;
}());
var MusicPlayCommand = /** @class */ (function () {
    function MusicPlayCommand() {
    }
    MusicPlayCommand.prototype.execute = function () {
        console.log('Music is playing');
    };
    return MusicPlayCommand;
}());
// Command Class
// Tip: Can be Singleton or Non-Singleton based on requirement 
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.command = null;
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.command = command;
    };
    RemoteControl.prototype.pressButton = function () {
        if (this.command) {
            this.command.execute();
        }
        else {
            console.log('No command set');
        }
    };
    return RemoteControl;
}());
// Remove instance
var remoteControl = new RemoteControl();
// command list
var lightOn = new LightOnCommand();
remoteControl.setCommand(lightOn);
remoteControl.pressButton();
var musicPlay = new MusicPlayCommand();
remoteControl.setCommand(musicPlay);
remoteControl.pressButton();
// ... 
