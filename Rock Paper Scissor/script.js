let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");
let btn = document.querySelector(".btn");

let youCntr = document.querySelector("#youCounter");
let compCntr = document.querySelector("#compCounter");
let drawCntr = document.querySelector("#drawCounter");

let playerImg = document.querySelector("#playerChoice");
let compImg = document.querySelector("#compChoice");

let userInput = "";
let compInput = "";
const choicearr = ["rock", "paper", "scissors"];

const displayImgPlayer = () => {
  for (choice of choicearr) {
    if (choice == userInput) {
      playerImg.src = `assets/${userInput}.png`;
    }
  }
};

const displayImgComputer = () => {
  for (choice of choicearr) {
    if (choice == compInput) {
      compImg.src = `assets/${compInput}.png`;
    }
  }
};

const computerPlay = () => {
  compInput = choicearr[Math.floor(Math.random() * choicearr.length)];
  displayImgComputer();
};

const winner = () => {
  if (userInput == compInput) {
    drawCntr.innerText++;
  } else if (userInput == "rock" && compInput == "scissors") {
    youCntr.innerText++;
  } else if (userInput == "rock" && compInput == "paper") {
    compCntr.innerText++;
  } else if (userInput == "paper" && compInput == "scissors") {
    compCntr.innerText++;
  } else if (userInput == "paper" && compInput == "rock") {
    youCntr.innerText++;
  } else if (userInput == "scissors" && compInput == "paper") {
    youCntr.innerText++;
  } else if (userInput == "scissors" && compInput == "rock") {
    compCntr.innerText++;
  }
};

rockBtn.addEventListener("click", () => {
  userInput = "rock";
  displayImgPlayer();
  computerPlay();
  winner();
});

paperBtn.addEventListener("click", () => {
  userInput = "paper";
  displayImgPlayer();
  computerPlay();
  winner();
});

scissorBtn.addEventListener("click", () => {
  userInput = "scissors";
  displayImgPlayer();
  computerPlay();
  winner();
});
