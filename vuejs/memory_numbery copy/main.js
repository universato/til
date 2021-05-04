const app = Vue.createApp({
  data(){
    return {
      countDown: '10000',
      timer: null,
    }
  },
  created(){
    this.countDown = 5
    this.timer = setInterval(() => {
      this.countDown--;
      if(this.countDown === 0){
        clearInterval(this.timer)
      }
    }, 1000)
  },
  methods: {
    stop(){
      if(this.countDown === 0){
        clearInterval(this.timer)
      }
    },
  }
})

app.mount('#app')
