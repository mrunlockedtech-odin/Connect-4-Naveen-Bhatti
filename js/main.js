/*-------------------------------- Constants --------------------------------*/
const winningPlacements = [
  //Horizontal Solutions
  [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
  [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
  [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
  [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
  [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
  [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],

  //Vertical Solutions
  [0,7,14,21],[7,14,21,28],[14,21,28,35],
  [1,8,15,22],[8,15,22,29],[15,22,29,36],
  [2,9,16,23],[9,16,23,30],[16,23,30,37],
  [3,10,17,24],[10,17,24,31],[17,24,31,38],
  [4,11,18,25],[11,18,25,32],[18,25,32,39],
  [5,12,19,26],[12,19,26,33],[19,26,33,40],
  [6,13,20,27],[13,20,27,34],[20,27,34,41],

  //Diagonal Solutions (left to right)
  [3,9,15,21],
  [28,22,16,10],[22,16,10,4],
  [35,29,23,17],[29,23,17,11],[23,17,11,5],
  [36,30,24,18],[30,24,18,12],[24,18,12,6],
  [37,31,25,19],[31,25,19,13],
  [38,32,26,20],

  //Diagonal Solutions (right to left)
  [3,11,19,27],
  [2,10,18,26],[10,18,26,34],
  [41,33,25,17],[33,25,17,9],[25,17,9,1],
  [0,8,16,24],[8,16,24,32],[16,24,32,40],
  [7,15,23,31],[15,23,31,39],
  [14,22,30,38]
]

/*---------------------------- Variables (state) ----------------------------*/
let boardEls, turn, winner, winCount
let correctedPlayer


/*------------------------ Cached Element References ------------------------*/
const resetButton = document.getElementById("reset-button")

const gridEls = document.querySelectorAll(".gridEntry")

const boardEle = document.querySelector("#board")

const outMsg = document.getElementById("msg")



/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener("click", evt => {
  console.log(evt.target.id)
})
boardEle.addEventListener("click", handleClick)


/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  boardEls = [
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null
  ]
  resetButton.setAttribute("hidden",true)
  turn = 1
  winner = null
  render()
}

function render(){
  boardEls.forEach(function(element,idx){
    if(boardEls[idx] === 1){
      gridEls[idx].style.backgroundImage = "url('../assets/images/RedPiece.png')"
    } else if(boardEls[idx] === -1){
      gridEls[idx].style.backgroundImage = "url('../assets/images/YellowPiece.png')"
    } else {
      gridEls[idx].style.backgroundColor = "white"
    }
  });
  correctedPlayer = turn === 1 ? 1:2
  if(winner === null){
    outMsg.innerText = `It is Player ${correctedPlayer}'s Turn`
  } else if(winner === 'T'){
    outMsg.innerText = 'It is a Tie. Click Below to Play Again!'
  } else {
    outMsg.innerText = `Player ${winner === 1 ? 1:2} has Won! Click Below to Play Again!`
  }
}

function handleClick(clickEvt){
  tileIndex = parseInt(clickEvt.target.id.slice(4))
  if(boardEls[tileIndex] || winner !== null){
    return
  } else{
    boardEls[tileIndex] = turn
    turn = turn * -1
    //console.dir(boardEls)
  }
  getWinner()
  render()
}

function getWinner(){
  let positionTotal
  winningPlacements.forEach(function(combo){
    positionTotal = Math.abs(boardEls[combo[0]]+boardEls[combo[1]]+boardEls[combo[2]]+boardEls[combo[3]])

    if(winner === null){
      if(positionTotal === 4){
        winner = boardEls[combo[0]]
        return winner
      }else{
        winner = null
      }
    }
    console.log(winner)
    //console.log(positionTotal,turn === 1 ? "Player 1":"player 2")
  })
}