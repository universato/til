// 第９章ユーティリティ型

type ItemType = {
  name: string;
  price: number;
  fn(n: number): void;
}

type ItemPartialType = Partial<ItemType>;

//前述のItemType,ItemPartialTypeの続き
let obj = {id: 1, name: "abc"}
let obj2 = {fn(n: number){console.log(n);}}
// let item1: ItemType = obj; //エラー
// let item2: ItemType = obj2; //エラー
let item3: ItemPartialType = obj;
let item4: Partial<ItemType> = obj;
let item5: Partial<ItemType> = obj2;
