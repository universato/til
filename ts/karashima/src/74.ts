interface I{
  n: number;
  s: string;
}

let i: I;
let ok1 = {n: 1, s:' abc'}
let ok2 = {n: 1, s: 'abc', b: true}
let ng1 = {n: 1}             // sが無い
let ng2 = {n: '1', s: 'abc'} // nがstring型

i = ok1;
i = ok2;
// i = ng1; // エラー
// i = ng2; // エラー

interface I74{
  n?: number;
  s?: string;
}

let i74: I74;
let ok1_74 = {n: 1}
let ok2_74 = {s: 'abc'}
let ok3_74 = {s: 'abc', b:true}
let ok4_74 = {n:1, s:'abc' , b: true }
let ok5_74 = {}
let ng1_74 = {b:true}

i74= ok1_74;
i74= ok2_74;
i74= ok3_74;
i74= ok4_74;
i74= ok5_74;
// i74= ng1_74; //エラー
