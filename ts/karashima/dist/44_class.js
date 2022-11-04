"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    formatText() {
        return `name:${this.name}`;
    }
}
let taro = new User('Taro');
console.log(taro.formatText()); //"name:Taro"
console.log(taro.name); //"Taro"
// コンストラクタ省略
class User44 {
    constructor() {
        this.name = "Name";
    }
}
let user44 = new User44();
console.log(user44.name); //"Name"
user44.name = 'Taro';
console.log(user44.name); //"Taro"
class User45 {
    constructor(name) {
        this.name = name;
    }
}
let taro45 = new User('Taro');
console.log(taro45.formatText()); // "name: Taro"
//# sourceMappingURL=44_class.js.map