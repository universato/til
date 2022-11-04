function numberFn(arg: number){
  console.log(arg);
}

//ジェネリクス関数
function genericsFn<T>(arg: T){
  console.log(arg);
}

//numberFn/genericsFn関数定義からの続き
numberFn(10);
genericsFn<number>(10);
genericsFn<string>("10");
//引数の型を型推論
genericsFn("10");
