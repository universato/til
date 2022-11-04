"use strict";
class User53 {
    constructor() {
        this.test = "";
    }
    get name() {
        return this.test;
    }
    set name(name) {
        this.test = name;
    }
}
let taro53 = new User53();
taro53.name = 'Taro-name';
console.log(taro53.test);
taro53.test = 'Taro-test';
console.log(taro53.test);
//# sourceMappingURL=53.js.map