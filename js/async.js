class Hoge {
  static async foo(n) {
    for(let i = 0; i < n; i++){
      console.log(`${i} foo`);
    }
  }

  static async bar(n) {
    for(let i = 0; i < n; i++){
      this.foo(i);
      console.log(`${i} bar`);
    }
  }
}

Hoge.foo(10**3)
Hoge.bar(10**3)
