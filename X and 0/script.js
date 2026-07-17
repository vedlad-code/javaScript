let player = "1";

let btnclicked = 0;

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rebtn");
let win = document.querySelector("#win");
let winbox = document.querySelector(".winbox");
let newbtn = document.querySelector("#newbtn");
let gamebox = document.querySelector(".container");

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  player = "1";
  btnclicked = 0;
  winbox.classList.add("hide");
  gamebox.classList.remove("hide");
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkwin = () => {
  for (pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos1 == pos3) {
        win.innerText = `${pos1} is the WINNER`;
        winbox.classList.remove("hide");
        gamebox.classList.add("hide");
        for (box of boxes) {
          box.disabled = true;
        }
      } else if (btnclicked == 9) {
        win.innerText = "It is a DRAW";
        winbox.classList.remove("hide");
        gamebox.classList.add("hide");
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    btnclicked++;
    if (player == "1") {
      box.innerText = "X";
      player = "2";
    } else {
      box.innerText = "O";
      player = "1";
    }
    box.disabled = true;
    checkwin();
  });
});

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
