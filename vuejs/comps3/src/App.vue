<template>
  <div id="app">
    <div class="hoge" :style="{ background: color}">親</div>
    <FirstComponent @onClick="changeColor" :color="color"/>
    <FirstComponent @onClick="changeColor" :color="color"/>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'

export default {
  name: 'App',
  components: {
    FirstComponent
  },
  data: function() {
    return {
      color: ''
    }
  },
  methods: {
    changeColor: function(color) {
      this.color = color;
    }
  }
}
</script>

<style scoped>
  .hoge {
    width: 200px;
  }
</style>
