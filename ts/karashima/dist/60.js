"use strict";
class Drink60 {
}
class Coffee60 extends Drink60 {
    constructor() {
        super(...arguments);
        this.name = "コーヒー";
    }
    comment() {
        console.log(`これは「${this.name}」です`);
    }
}
let coffee60 = new Coffee60();
coffee60.name = "Coffee";
coffee60.comment(); // "これは「Coffee」です"
//# sourceMappingURL=60.js.map