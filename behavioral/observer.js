var YoutubeChannel = /** @class */ (function () {
    function YoutubeChannel() {
        // List of subscribers
        this.observers = [];
    }
    // Add more subscribers methods
    YoutubeChannel.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    // Notify all subscribers for uploading new video
    // Private methods (only uploading video can be call)
    YoutubeChannel.prototype.notifyObservers = function (videoTitle) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(videoTitle);
        }
    };
    // Uploading video method
    YoutubeChannel.prototype.uploadVideo = function (videoTitle) {
        console.log("New upload video: ".concat(videoTitle));
        this.notifyObservers(videoTitle);
    };
    return YoutubeChannel;
}());
var Fan = /** @class */ (function () {
    function Fan(name) {
        this.name = name;
    }
    Fan.prototype.update = function (videoTitle) {
        console.log("Mr/Ms. ".concat(this.name, " received notitification: New video title: ").concat(videoTitle));
    };
    return Fan;
}());
// Objects
// Youtube Channel
var mrbeastChannel = new YoutubeChannel();
// Youtube Subscribers
var peter = new Fan('Peter');
var alice = new Fan('Alice');
// Subscribe to Youtube Channel
mrbeastChannel.addObserver(peter);
mrbeastChannel.addObserver(alice);
// Youtuber upload videos
mrbeastChannel.uploadVideo('24h without smartphone');
