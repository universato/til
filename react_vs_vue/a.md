
React

`app.js`はこう書くものらしい。
```js
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
    );
  }
}

export default App;
```

`render()`メソッド内の`return()`で、JSXを返す。
JSXは、ルートが1つで、閉じタグで、 `/`が必要。
`{}`でJS式を埋める。

```js
const ComponentA = {
  /* ... */
}

const ComponentB = {
  components: {
    'component-a': ComponentA
  }
  // ...
}
```

`{{ JS式 }}`や`v-bind:属性="JS式"`

React

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
```

Vue

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
  // ...
}
```

React

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello World</h1>
        {/* コメント */}
      </div>
    );
  }
}
```

Reactはrender()関数内に表示する。
Reactは、閉じタグが必須。


React

```jsx
<button イベント名={() => { }}></button>
<button onClick={() => { }}></button>
<button onClick={() => { console.log("hello"); }}></button>
<button onClick={() => { this.showAlert(); }}></button>
```

アロー関数

Vue.js
```html
<button @click="メソッド名"></button>
<button @click="JS式"></button>
<button @click="showAlert"></button>
```

React

```jsx
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0,
    };
  }

  handleClick(name){
    this.setState({name: name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>hello</h1>
        <div> {this.state.name} </div>
        <button ocClick={()=>{this.handleClick('Bob')} }>
          Bob
        </button>
      </div>
    );
  }
}

export default App;
```

```js
constructor(props){
  super(props)
  this.state = {}
```

`props`を書く。


Reactは`this`をつける。これ、クラス内につけてるからかな。
constで定義している定数なら、ビュー側で`this`不要っぽい。

```js
// NG
this.state = {name: 'Alice'};
this.state.name = 'Alice';

// OK
this.setState({name: 'Alice'});
```

React
```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0,
    };
  }

}
```

Vue.js
```js
data() {
  return {
    name: "smith",
    count: 0,
  }
}
```

リターン内は、オブジェクト

Reactは、普通にクラス内にメソッドを書く。
Vue.jsは、methodsキー(プロパティ)に書く。

React

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
```

Vueはオブジェクトから作る。
Reactはクラスから作る。
```js
app = Vue.creaetApp({
  data(){

  },
})

app.mount("#app")
```


ReactもVue.jsもコンポーネントという。


```js
import React from 'react';
import Language from './Language'

class App extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
      <Language />
      <Language />
      <Language />
    );
  }
}

export default App;
```

```js
component = {
  template: `
    <h1>Foo</h1>
  `
}
```

```js
<template>
  <Language></Language>
  <Language></Language>
  <Language></Language>
</template>
```


React

```js
import React from 'react';
import Language from './Language'

class App extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
      <Language 
        name="Ruby"
        prop名="値"
      />
      <Language />
      <コンポーネント名
        prop名="値"
      />
    );
  }
}

export default App;
```

`this.props`にオブジェクトという形で格納される。

Vue.js
```js
<template>
  <Language name="Vue.js"></Language>
  <Language></Language>
  <Language></Language>
</template>
```

React

```jsx
{languageList.map((languageItem) => {
  return (
    <Language
      name = {languageItem.name}
      image = {languageItem.image}
    />
  )
})}
```

`map`だから、{}の中に配列を書いている。配列の要素に、JSXが使われている。


```js
{lessonList.map((lessonItem) => {
  return (
    <Lesson
      name={lessonItem.name}
      image={lessonItem.image}
    />
  )
})
}
```

mapの引数の)のあとに`;`があると正しく動かない？

React

JSXは、丸括弧で囲む。

JSX

```html
<input>
<input />
<textarea></textarea> 
```

```jsx
<input />
<textarea /> 
```

閉じタグのないタグについて、`/`をつける必要がある。  
それだけじゃなくて、`textarea`タグは、閉じタグなしで`/`をつける。

```jsx
<form onSubmit={() => {this.handleSubmit()}}>

// これだとダメ?
<form onSubmit={() => {this.handleSubmit()};}>
```

```jsx
<input
  onChange={(event) => {console.log(event.target.value)}}
/>
```
