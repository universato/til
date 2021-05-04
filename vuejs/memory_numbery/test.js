console.log("test.js starts")

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newMatrix(row, col) {
  m = new Array(row)
  for(let i = 0; i < row; i++){
    m[i] = new Array(col)
  }
  return m;
}

const app = Vue.createApp({
  data(){
    return {

    }
  },
})

app.mount('#app')
