interface IBookLibrary {
  read(): void;
}

class RealBook implements IBookLibrary {
  read(): void {
    console.log('Reading the real book...');
  }
}

class ProxyBook implements IBookLibrary {
  private realBook: RealBook;
  private reader: string;

  constructor() {
    this.realBook = new RealBook();
    this.reader = '';
  }

  read(): void {
    if (this.reader === '') {
      console.log('Sorry, you dont have permission to read, Please provide reader first');
    } else {
      console.log(`Reader: ${this.reader} is reading book from proxy`);
      this.realBook.read();
    }
  }

  setReader(reader: string) {
    this.reader = reader;
  }
}

const proxyBook = new ProxyBook();
proxyBook.read();

proxyBook.setReader('Pisith');
proxyBook.read();