"use strict";
function numberFn(arg) {
    console.log(arg);
}
//ジェネリクス関数
function genericsFn(arg) {
    console.log(arg);
}
//numberFn/genericsFn関数定義からの続き
numberFn(10);
genericsFn(10);
genericsFn("10");
//引数の型を型推論
genericsFn("10");
//# sourceMappingURL=66.js.map