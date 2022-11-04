"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Parent47_name, _Child47_name;
class Parent {
    constructor() {
        this.name = 'Parent';
    }
    pFormatText() {
        return `name:${this.name}`;
    }
}
class Child extends Parent {
    constructor() {
        super(...arguments);
        //nameプロパティをオーバーライドしている
        this.name = 'Child';
    }
    cFormatText() {
        return `name:${this.name}`;
    }
}
let p = new Parent();
let c = new Child();
console.log(p.pFormatText()); // "name:Parent"
console.log(c.pFormatText()); // "name:Child"
console.log(c.cFormatText()); // "name:Child"
console.log(p.name); // Parent
console.log(c.name); // Child
// プライベートフィールド
class Parent47 {
    constructor() {
        _Parent47_name.set(this, 'Parent');
    }
    pFormatText() {
        return `name:${__classPrivateFieldGet(this, _Parent47_name, "f")}`;
    }
}
_Parent47_name = new WeakMap();
class Child47 extends Parent47 {
    constructor() {
        super(...arguments);
        //nameプロパティをオーバーライドしている
        _Child47_name.set(this, 'Child');
    }
    cFormatText() {
        return `name:${__classPrivateFieldGet(this, _Child47_name, "f")}`;
    }
}
_Child47_name = new WeakMap();
let p47 = new Parent47();
let c47 = new Child47();
console.log(p47.pFormatText()); // "name:Parent"
console.log(c47.pFormatText()); // "name:Parent"
console.log(c47.cFormatText()); // "name:Child"
console.log(p.name); // Parent
console.log(c.name); // Child
class User48 {
    constructor(name) {
        this.name = name;
    }
}
let taro48 = new User48('Taro');
console.log(taro48);
console.log(taro48.name);
// taro48.name = 'TARO'; //エラー Cannot assign to 'name' because it is a read-only property.ts(2540)
class User49 {
    constructor(name) {
        this.name = name;
    }
    formatText() {
        return `name:${this.name}`;
    }
}
class AdminUser extends User49 {
    constructor() {
        super(...arguments);
        this.roles = 0;
    }
    hasRoles() {
        if (this.roles > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
class User52 {
    constructor() {
        this._name = "";
    }
    get name() {
        //ゲッター
        return this._name;
    }
    set name(name) {
        //セッター
        this._name = name;
    }
}
let taro52 = new User52();
taro52.name = 'Taro'; //セッターが呼ばれる
//# sourceMappingURL=47.js.map