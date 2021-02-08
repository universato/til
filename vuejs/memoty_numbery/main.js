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
      arraySize: 99,
      colSize: 10,
      randomNumbers: [],
      recallNumbers: [],
      randomMatrix: [],
      recallMatrix: [],
      countDown: 60,
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

    this.countDown = 10;
    this.memoryTimer = setInterval(() => {
      this.countDown--;
      if(this.countDown === 0){
        this.onMemoryTime = false;
        this.onRecallTime = true;
        clearInterval(this.memoryTimer);
        this.countDown = 10;
        this.recallTimer = setInterval(() => {
          this.countDown--;
          if(this.countDown === 0){
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

    },
    reset(){
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

      this.countDown = 10;
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
      // console.log("end Memory()")
      this.onMemoryTime = false;
      this.onRecallTime = true;

      this.countDown = 10;
      clearInterval(this.memoryTimer)
      this.recallTimer = setInterval(() => {
        this.countDown--;
        if(this.countDown === 0){
          this.onRecallTime = false;
        }
      }, 1000)

    },
    endRecall(){
      // console.log("end Recall()")
      this.countDown = 0;
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
    }
  }
})

app.mount('#app')

console.log("main.js ends")

// preparationTime
// MemoryTime
// RecallTime
// Result

// start
// ↓ カウントダウン開始
// preparationTime(終了ボタン→)
// ↓ カウントダウン開始
// MemoryTime(終了ボタン→)
// ↓ カウントダウン開始
// RecallTime(終了ボタン→)
// ↓ score計算
// Result
// ↓ resetボタン
