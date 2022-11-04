abstract class Drink60{
  abstract name:string;
  abstract comment(): void;
}

class Coffee60 extends Drink60{
  name = "コーヒー";
  comment(): void{
    console.log(`これは「${this.name}」です`);
  }
}

let coffee60 = new Coffee60();
coffee60.name = "Coffee";
coffee60.comment(); // "これは「Coffee」です"
