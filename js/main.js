/*-------------------------------- Constants --------------------------------*/
const winningPlacement = [
  //Horizontal Solutions
  [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
  [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
  [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
  [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
  [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
  [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41]

]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, winCount


/*------------------------ Cached Element References ------------------------*/
const resetButton = document.getElementById("reset-button")

const gridEls = document.querySelectorAll(".gridEntry")

const boardEle = document.querySelector("#board")

const outMsg = document.getElementById("msg")



/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener("click", evt => {
  console.log(evt.target.id)
})
boardEle.addEventListener("click", evt => {
  console.log(evt.target.id)
})


/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  board = [
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
  resetAnimations()
  render()
}