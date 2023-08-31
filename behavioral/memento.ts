class Memento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

}

class Editor {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  // Memento or State methods

  createMemento(): Memento {
    return new Memento(this.content);
  }

  restoreFromMemento(memento: Memento) {
    this.content = memento.getContent();
  }
}

const editor = new Editor('Once upon the time ...');
const memento1 = editor.createMemento();

console.log(editor.getContent());
console.log(memento1.getContent());

editor.setContent('There was a brave knight...');
const memento2 = editor.createMemento();

console.log(editor.getContent());
console.log(memento1.getContent());
console.log(memento2.getContent());

editor.restoreFromMemento(memento1);
console.log(editor.getContent());

editor.restoreFromMemento(memento2);
console.log(editor.getContent());
