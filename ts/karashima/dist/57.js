"use strict";
class Drink {
    constructor() {
        this.name = "飲み物";
    }
    comment() {
        console.log(`これは「${this.name}」です`);
    }
}
// let drink = new Drink(); // エラー
class Coffee extends Drink {
}
let coffee = new Coffee();
coffee.name = "コーヒー";
coffee.comment(); // "これは「コーヒー」です"
class Drink58 {
    constructor() {
        this.name = "飲み物";
    }
}
class Coffee58 extends Drink58 {
    comment() {
        console.log(`これは「${this.name}」です`);
    }
}
let coffee58 = new Coffee58();
coffee58.name = "珈琲";
coffee58.comment(); // "これは「珈琲」です"
//# sourceMappingURL=57.js.map