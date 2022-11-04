// https://github.com/deatiger/JavaScriptBasic/blob/develop/asynchronous/promise.js

import fetch from 'node-fetch';

// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/deatiger'

        // GitHub APIをFetchメソッドで実行
        fetch(url).then(res => {
            // console.log(res);
            let json = res.json();
            return json.login;
            })
            .then(json => {
                console.log(json);
                console.log('これは非同期処理成功時のメッセージです')
                // return resolve(json.login)
            }).catch(error => {
                // console.error('これは非同期処理失敗時のメッセージです。', error)
                console.error('これは非同期処理失敗時のメッセージです。')
                return reject('null')
            })

    })
};

const message = 'GitのユーザーIDは'
getGitUsername().then(username => {
    console.log(message + username)
});

const url = 'https://api.github.com/users/deatiger'
console.log(fetch(url))

const fulfilledPromise = new Promise((resolve) => {
    resolve(43);
});

console.log(new Promise(()=>{}))
console.log(Promise.resolve(43))
console.log(fulfilledPromise);
// console.log(Promise.reject())
