var Memento = /** @class */ (function () {
    function Memento(content) {
        this.content = content;
    }
    Memento.prototype.getContent = function () {
        return this.content;
    };
    return Memento;
}());
var Editor = /** @class */ (function () {
    function Editor(content) {
        this.content = content;
    }
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    // Memento or State methods
    Editor.prototype.createMemento = function () {
        return new Memento(this.content);
    };
    Editor.prototype.restoreFromMemento = function (memento) {
        this.content = memento.getContent();
    };
    return Editor;
}());
var editor = new Editor('Once upon the time ...');
var memento1 = editor.createMemento();
console.log(editor.getContent());
console.log(memento1.getContent());
editor.setContent('There was a brave knight...');
var memento2 = editor.createMemento();
console.log(editor.getContent());
console.log(memento1.getContent());
console.log(memento2.getContent());
editor.restoreFromMemento(memento1);
console.log(editor.getContent());
editor.restoreFromMemento(memento2);
console.log(editor.getContent());
