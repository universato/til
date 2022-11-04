class Parent{
  name = 'Parent';
  pFormatText(): string{
    return `name:${this.name}`
  }
}

class Child extends Parent{
  //nameプロパティをオーバーライドしている
  name = 'Child';
  cFormatText(): string{
    return `name:${this.name}`
  }
}

let p = new Parent();
let c = new Child();
console.log(p.pFormatText()); // "name:Parent"
console.log(c.pFormatText()); // "name:Child"
console.log(c.cFormatText()); // "name:Child"

console.log(p.name); // Parent
console.log(c.name); // Child

// プライベートフィールド
class Parent47{
  #name = 'Parent';
  pFormatText(): string{
    return `name:${this.#name}`
  }
}

class Child47 extends Parent47{
  //nameプロパティをオーバーライドしている
  #name = 'Child';
  cFormatText(): string{
    return `name:${this.#name}`
  }
}

let p47 = new Parent47();
let c47 = new Child47();
console.log(p47.pFormatText()); // "name:Parent"
console.log(c47.pFormatText()); // "name:Parent"
console.log(c47.cFormatText()); // "name:Child"

console.log(p.name); // Parent
console.log(c.name); // Child


class User48{
  readonly name: string
  constructor(name: string){
    this.name=name
  }
}

let taro48 = new User48('Taro');
console.log(taro48);
console.log(taro48.name);
// taro48.name = 'TARO'; //エラー Cannot assign to 'name' because it is a read-only property.ts(2540)

class User49{
  protected name: string
  constructor(name: string){
    this.name = name
  }
  formatText(): string{
    return `name:${this.name}`
  }
}

class AdminUser extends User49{
  protected roles: number = 0;
  hasRoles(): boolean{
    if(this.roles>0){
      return true;
    }else{
      return false;
    }
  }
}

class User52{
  private _name: string = "";
  get name(): string{
    //ゲッター
    return this._name;
  }
  set name(name: string){
    //セッター
    this._name = name;
  }
}

let taro52 = new User52();
taro52.name = 'Taro'; //セッターが呼ばれる
