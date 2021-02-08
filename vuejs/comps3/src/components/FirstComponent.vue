<template>
  <div>
    <div class="hoge" :style="{background: color}">子1</div>
    <input type="text" v-model="inputColor">
    <button type="button" @click="changeColor">入力</button>
  </div>
</template>

<script>
export default {
  name: 'FirstComponet',
  props: ['color'],
  data() {
    return {
      inputColor: ''
    }
  },
  methods: {
    changeColor() {
      this.$emit('onClick', this.inputColor);
    }
  }
}
</script>

<style scoped>
  .hoge {
    width: 200px;
  }
</style>≈
