console.log("main.js starts")

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

let app = Vue.createApp({
  data(){
    return {
      env: 'develop',
      gameState: 'awaitTime',
      arraySize: 99,
      colSize: 10,
      randomNumbers: [],
      recallNumbers: [],
      randomMatrix: [],
      recallMatrix: [],
      countDown: 60,
      preparationMinutes: 1,
      preparationSecond: 0,
      memoryMinutes: 1,
      memorySecond: 0,
      recallMinutes: 1,
      recallSecond: 0,
      memoryTimer: null,
      recallTimer: null,
      onMemoryTime: true,
      onRecallTime: false,
    }
  },
  created(){
    this.arraySize = 99
    this.shuffleNumbers(this.arraySize);
    this.recallNumbers = new Array(this.arraySize)

    this.shuffleMatrix();
    row = Math.ceil(this.arraySize / this.colSize);

    this.recallMatrix = newMatrix(row, this.colSize);
    console.log(this.recallMatrix)

    this.countDown = this.memoryTime();
    this.gameState = "memoryTime"
    this.memoryTimer = setInterval(() => {
      this.countDown--;
      if(this.countDown === 0){
        this.onMemoryTime = false;
        this.onRecallTime = true;
        this.gameState = "recallTime"
        clearInterval(this.memoryTimer);
        this.countDown = 10;
        this.recallTimer = setInterval(() => {
          this.countDown--;
          if(this.countDown === 0){
            this.gameState = "resultTime"
            this.onRecallTime = false;
          }
        }, 1000)
      }
    }, 1000)
  },
  methods: {
    shuffleMatrix(){
      console.log("shuffle Matrix")
      col = this.colSize;
      row = Math.ceil(this.arraySize / col)
      cnt = 0
      for(let i = 0; i < col; i++){
        a = new Array;
        for(let j = 0; j < row; j++){
          a[j] = randomInt(10);
          cnt += 1;
          if(cnt == this.arraySize){
            this.randomMatrix[i] = a;
            break;
          }
        }
        this.randomMatrix[i] = a;
      }
    },
    shuffleNumbers(arraySize){
      this.randomNumbers = new Array(arraySize)
                                .fill(0)
                                .map(() => { return randomInt(10) })
    },
    stop(){
      if(this.countDown === 0){
        clearInterval(this.timer)
      }
    },
    start(){
      this.arraySize = 99
      this.shuffleNumbers(this.arraySize);
      this.recallNumbers = new Array(this.arraySize)

      this.shuffleMatrix();
      row = Math.ceil(this.arraySize / this.colSize);

      this.recallMatrix = newMatrix(row, this.colSize);
      console.log(this.recallMatrix)

      this.countDown = 10;
      this.gameState = "memoryTime"
      this.memoryTimer = setInterval(() => {
        this.countDown--;
        if(this.countDown === 0){
          this.onMemoryTime = false;
          this.onRecallTime = true;
          this.gameState = "recallTime"
          clearInterval(this.memoryTimer);
          this.countDown = 10;
          this.recallTimer = setInterval(() => {
            this.countDown--;
            if(this.countDown === 0){
              this.gameState = "resultTime"
              this.onRecallTime = false;
            }
          }, 1000)
        }
      }, 1000)
    },
    reset(){
      this.gameState = "settingTime";
      clearInterval(this.timer)
      clearInterval(this.memoryTimer)
      clearInterval(this.recallTimer)
    },
    reload(){
      location.href = location.href
    },
    restart(){
      if(this.env === 'develop'){ console.log("restrt()") }
      this.gameState = "memoryTime"
      this.onRecallTime = false
      clearInterval(this.recallTimer)
      clearInterval(this.memoryTimer)
      this.arraySize = 99
      this.shuffleNumbers(this.arraySize);
      this.recallNumbers = new Array(this.arraySize)

      this.shuffleMatrix();
      row = Math.ceil(this.arraySize / this.colSize);

      this.recallMatrix = newMatrix(row, this.colSize);
      // console.log(this.recallMatrix)

      this.countDown = this.memoryTime();
      // console.log(this.memoryTime());
      this.onMemoryTime = 10;
      this.memoryTimer = setInterval(() => {
        this.countDown--;
        if(this.countDown <= 0){
          this.onMemoryTime = false;
          this.onRecallTime = true;
          clearInterval(this.memoryTimer);
          this.countDown = 10;
          this.recallTimer = setInterval(() => {
            this.countDown--;
            if(this.countDown <= 0){
              this.onRecallTime = false;
            }
          }, 1000)
        }
      }, 1000)
    },
    endMemory(){
      if(this.env === 'develop'){ console.log("end Memory()") }
      this.onMemoryTime = false;
      this.onRecallTime = true;
      this.gameState = "recallTime";

      this.countDown = this.recallTime();
      clearInterval(this.memoryTimer)
      this.recallTimer = setInterval(() => {
        this.countDown--;
        if(this.countDown === 0){
          this.onRecallTime = false;
          this.gameState = "resultTime";
        }
      }, 1000)

    },
    endRecall(){
      // console.log("end Recall()")
      this.countDown = 0;
      this.gameState = "resultTime";
      this.onRecallTime = false;
    },
    change(number, index){
      this.recallNumbers[index] = parseInt(number)
    },
    changeMatrixNumber(number, row, col){
      this.recallMatrix[row][col] = parseInt(number)
    },
    score(){
      score = 0
      for(score = 0; score < this.arraySize; score++){
        if(this.randomNumbers[score] != this.recallNumbers[score]){
          return score;
        }
      }
      return score;
    },
    scoreMatrix(){
      score = 0
      col = this.colSize
      row = Math.ceil(this.arraySize / col)
      console.log(this.randomMatrix)
      console.log(this.recallMatrix)
      for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
          console.log(i, j)
          if(this.randomMatrix[i][j] == this.recallMatrix[i][j]){
            score++;
          }else{
            return score;
          }
        }
      }
      return this.arraySize;
    },
    numberOfMatch(){
      numberOfMatch = 0
      for(let i = 0; i < this.arraySize; i++){
        if(this.randomNumbers[i] == this.recallNumbers[i]){
          numberOfMatch++;
        }
      }
      return numberOfMatch;
    },
    preparationTime(){
      return Number(this.preparationMinutes * 60) + Number(this.preparationSecond)
    },
    memoryTime(){
      return Number(this.memoryMinutes * 60) + Number(this.memorySecond)
    },
    recallTime(){
      return Number(this.recallMinutes * 60) + Number(this.recallSecond)
    }
  },
  computed: {
  }
})

app.mount('#app')

console.log("main.js ends")

// preparationTime
// MemoryTime
// RecallTime
// Result

// start // 設定画面
// ↓ カウントダウン開始
// preparationTime(終了ボタン)
// ↓ カウントダウン開始
// MemoryTime(終了ボタン)
// ↓ カウントダウン開始
// RecallTime(終了ボタン)
// ↓ score計算
// Result
// ↓ resetボタン
