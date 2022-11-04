function fn(flag=true):string | number{
  if(flag){return "typescript";}
  else{return 100;}
}

let len = 0;
let a = fn();
// len = a.length
