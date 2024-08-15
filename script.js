let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
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

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("hell0")
      if (turnO) {
        //playerO
        box.innerText = "O";
      
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;  //helps in not changing of values(X / O) once entered
      checkwinner();
      });
});

const disableBoxes = () => {
  for (let box of boxes) {   //function to stop the game once winner is declared
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;  //function to enable to start the game again
    box.innerText = "";
  }
};



const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}



const checkwinner = () => {
  for(let i of winPatterns){   //helps in checking winning patterns
    // console.log(i[0], i[1], i[2])
    // console.log(boxes[i[0]], boxes[i[1]], boxes[i[2]])
    // console.log(i[[0]], i[[1]], i[[2]])
    // console.log(
    //   boxes[i[0]].innerText, 
    //   boxes[i[1]].innerText,
    //   boxes[i[2]].innerText
    // )
    let pos1val = boxes[i[0]].innerText;
    let pos2val = boxes[i[1]].innerText;
    let pos3val = boxes[i[2]].innerText;
   
    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if (pos1val == pos2val  && pos2val == pos1val){
        // console.log("winner!", pos1val)
      showwinner(pos1val);
      return true;
      }
    }

}
};



newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);