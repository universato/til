<template>
  <div>
    <div class="hoge" :style="{background: myColor}">子1</div>
    <input type="text" v-model="inputColor">
    <button type="button" @click="changeColor">入力</button>
  </div>
</template>

<script>
export default {
  name: 'FirstComponet',
  data: function() {
    return {
      myColor: '',
      inputColor: ''
    }
  },
  methods: {
    changeColor: function() {
      this.myColor = this.inputColor;
      this.$emit('onClick', this.inputColor);
    }
  }
}
</script>

<style scoped>
  .hoge {
    width: 200px;
  }
</style>
