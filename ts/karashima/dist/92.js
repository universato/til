"use strict";
// 第９章ユーティリティ型
//前述のItemType,ItemPartialTypeの続き
let obj = { id: 1, name: "abc" };
let obj2 = { fn(n) { console.log(n); } };
// let item1: ItemType = obj; //エラー
// let item2: ItemType = obj2; //エラー
let item3 = obj;
let item4 = obj;
let item5 = obj2;
//# sourceMappingURL=92.js.map