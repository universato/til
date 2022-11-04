class User53{
  test: string = "";

  get name(): string{
    return this.test;
  }

  set name(name: string){
    this.test = name;
  }
}

let taro53 = new User53();
taro53.name = 'Taro-name';
console.log(taro53.test)
taro53.test = 'Taro-test';
console.log(taro53.test)
