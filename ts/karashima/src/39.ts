interface R {
  red: number;
  comment: string;
}

interface G {
  green: number;
  comment: string;
}

interface B {
  blue: number;
  comment: string;
}

const Red: R | G | B = {
  red: 1,
  comment: "color",
}

const Green: R | G | B = {
  green: 1,
  comment: "color",
}

const Blue: R | G | B = {
  blue: 1,
  comment: "color",
}

const Magenta: R | G | B = {
  red: 1,
  blue: 1,
  comment: "color",
}

const White: R | G | B = {
  red: 1,
  green: 1,
  blue: 1,
  comment: "color",
}

const Color: R & G & B = {
  red: 1,
  green: 1,
  blue: 1,
  comment: "color",
}

console.log(White);
console.log(Color);
