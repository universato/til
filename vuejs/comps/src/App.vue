<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FooComponent msg="Welcome to Your Vue.js App"/>
    <FirstComponent @onClick="changeColor" :color="color"/> // color変更処理を渡す
    <SecondComponent @onClick="changeColor" :color="color"/> // colorを渡す!!!!!!!!!
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import SecondComponent from './components/SecondComponent.vue'
import FooComponent from './components/FooComponent.vue'

export default {
  name: 'App',
  components: {
    FooComponent,
    FirstComponent,
    SecondComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
