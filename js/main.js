/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



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