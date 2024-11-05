document.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newgameBtn = document.querySelector("#newGameBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".winMsg")
let turnO = true;

resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enableBox();
}

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBox = () => {
    for ( let gameBox of box){
        gameBox.disabled = true;
    }
}
const enableBox = () => {
    for (let gameBox of box) {
        gameBox.disabled = false;
        gameBox.innerText = "";
    }
}

const showWinner =(winner)=>
{
    msg.innerText = `Victory ! ${winner} won this round !`
    msgContainer.classList.remove("hide");
    disableBox();

}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


// newGameBtn.addEventListener("click", console.log("clicked"));
resetBtn.addEventListener("click", resetGame);
});

