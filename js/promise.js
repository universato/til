const executor = (resolve, reject) => {};
// const promise = new Promise(executor)
const promise = new Promise((resolve, reject) => {
  // 非同期の処理
  // 処理が終わったら、resolve or rejectを呼ぶ
  // 非同期処理が成功したらresolveを呼び、失敗したらrejectを呼ぶ
});
promise.then(successCallback, gsilutreCallback);
promise.then(onFulfilled, onRejected);
promise.catch(onRejected);
promise.then((result) => {}, (error) => {});
promise.then((value) => {}, (error) => {}); // azu氏のpromise本
promise.catch((error) => {});
promise.finally(onFinally)

Primise.all()
Promise.resolve()
Promise.reject()
