<template>
  <div>
    <div class="hoge" :style="{background: color}">子2</div>
  </div>
</template>

<script>
export default {
  name: 'SecondComponet',
  props: ['color']
}
</script>

<style scoped>
  .hoge {
    width: 200px;
  }
</style>
