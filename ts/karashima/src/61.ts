interface Hot{
  getHotMsg(): string;
}

//Hotインターフェイス作成後の続き
abstract class Drink61{
  abstract name: string;
  abstract comment(): void;
}

class Coffee61 extends Drink61 implements Hot{
  name = "コーヒー";
  comment(): void{
    console.log(`これは「${this.name}」です`);
  }
  getHotMsg(): string{
    return`温かい「ホット${this.name}」です`;
  }
}
