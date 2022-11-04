abstract class Drink{
  name = "飲み物";
  comment(): void{
    console.log(`これは「${this.name}」です`);
  }
}

// let drink = new Drink(); // エラー

class Coffee extends Drink{
}

let coffee = new Coffee();
coffee.name = "コーヒー";
coffee.comment(); // "これは「コーヒー」です"

abstract class Drink58{
  name = "飲み物";
  abstract comment(): void;
}

class Coffee58 extends Drink58{
  comment(): void{
    console.log(`これは「${this.name}」です`);
  }
}

let coffee58 = new Coffee58();
coffee58.name = "珈琲";
coffee58.comment(); // "これは「珈琲」です"
