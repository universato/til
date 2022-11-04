"use strict";
//Hotインターフェイス作成後の続き
class Drink61 {
}
class Coffee61 extends Drink61 {
    constructor() {
        super(...arguments);
        this.name = "コーヒー";
    }
    comment() {
        console.log(`これは「${this.name}」です`);
    }
    getHotMsg() {
        return `温かい「ホット${this.name}」です`;
    }
}
//# sourceMappingURL=61.js.map