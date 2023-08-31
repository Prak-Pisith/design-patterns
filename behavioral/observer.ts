interface Observer {
  update(videoTitle: string): void;
}

class YoutubeChannel {

  // List of subscribers
  private observers: Observer[] = [];

  // Add more subscribers methods
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Notify all subscribers for uploading new video
  // Private methods (only uploading video can be call)
  private notifyObservers(videoTitle: string): void {
    for (const observer of this.observers) {
      observer.update(videoTitle);
    }
  }

  // Uploading video method
  uploadVideo(videoTitle: string): void {
    console.log(`New upload video: ${videoTitle}`);
    this.notifyObservers(videoTitle);
  }
}

class Fan implements Observer {
  private name: string;

  constructor(name: string) { this.name = name; }

  update(videoTitle: string): void {
    console.log(`Mr/Ms. ${this.name} received notitification: New video title: ${videoTitle}`);
  }
}

// Objects

// Youtube Channel
const mrbeastChannel = new YoutubeChannel();

// Youtube Subscribers
const peter = new Fan('Peter');
const alice = new Fan('Alice');

// Subscribe to Youtube Channel
mrbeastChannel.addObserver(peter);
mrbeastChannel.addObserver(alice);

// Youtuber upload videos
mrbeastChannel.uploadVideo('24h without smartphone');
