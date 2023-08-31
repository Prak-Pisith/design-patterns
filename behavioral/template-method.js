// Template Method Design Pattern
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CharacterTemplate = /** @class */ (function () {
    function CharacterTemplate() {
    }
    CharacterTemplate.prototype.customizeCharacter = function () {
        console.log('Character Customization Completed');
    };
    CharacterTemplate.prototype.createCharacter = function () {
        this.selectSkills();
        this.selectWeapon();
        this.customizeCharacter();
    };
    return CharacterTemplate;
}());
var WarriorCharacter = /** @class */ (function (_super) {
    __extends(WarriorCharacter, _super);
    function WarriorCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarriorCharacter.prototype.selectSkills = function () {
        console.log("Selected strong and defensive skills.");
    };
    WarriorCharacter.prototype.selectWeapon = function () {
        console.log("Equipped with a mighty sword.");
    };
    return WarriorCharacter;
}(CharacterTemplate));
var MageCharacter = /** @class */ (function (_super) {
    __extends(MageCharacter, _super);
    function MageCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MageCharacter.prototype.selectSkills = function () {
        console.log('Selected magical spells and abilities.');
    };
    MageCharacter.prototype.selectWeapon = function () {
        console.log('Holding a staff for casting spells.');
    };
    return MageCharacter;
}(CharacterTemplate));
// Using Template Method
var warrior = new WarriorCharacter();
console.log('Building Warrior =====>');
warrior.createCharacter();
var mage = new MageCharacter();
console.log('Building Mage =====>');
mage.createCharacter();
