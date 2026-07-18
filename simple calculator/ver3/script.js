let a = "";
let b = "";
let sum = 0;
let op = false;
let arr = [];
let current = "";
let ops = [];

console.log(arr);

let display = document.querySelector(".displayscreen");

function digithandle(digit) {
  current += digit;
  display.textContent += digit;
}

function operatorhandle(operator) {
  arr.push(Number(current));
  current = "";
  ops.push(operator);
  op = true;
  display.textContent += operator;
}

document.querySelector("#btn1").onclick = () => {
  digithandle(1);
};
document.querySelector("#btn2").onclick = () => {
  digithandle(2);
};
document.querySelector("#btn3").onclick = () => {
  digithandle(3);
};
document.querySelector("#btn4").onclick = () => {
  digithandle(4);
};
document.querySelector("#btn5").onclick = () => {
  digithandle(5);
};
document.querySelector("#btn6").onclick = () => {
  digithandle(6);
};
document.querySelector("#btn7").onclick = () => {
  digithandle(7);
};
document.querySelector("#btn8").onclick = () => {
  digithandle(8);
};
document.querySelector("#btn9").onclick = () => {
  digithandle(9);
};
document.querySelector("#btn0").onclick = () => {
  digithandle(0);
};

document.querySelector("#btnplus").onclick = () => {
  operatorhandle("+");
};

document.querySelector("#btnminus").onclick = () => {
  operatorhandle("-");
};

document.querySelector("#btnmul").onclick = () => {
  operatorhandle("*");
};

document.querySelector("#btndiv").onclick = () => {
  operatorhandle("/");
};

let btne = document.querySelector("#btne");
btne.onclick = () => {
  arr.push(Number(current));
  current = "";
  console.log(arr);

  if (op) {
    sum = arr[0];

    for (i = 0; i < ops.length; i++) {
      if (ops[i] == "+") {
        sum += arr[i + 1];
      } else if (ops[i] == "-") {
        sum -= arr[i + 1];
      } else if (ops[i] == "*") {
        sum *= arr[i + 1];
      } else if (ops[i] == "/") {
        sum /= arr[i + 1];
      }
    }
    display.textContent = sum;
    op = false;
    arr = [];
    ops = [];
  } else {
    display.textContent = "choose operator";
  }
};

document.querySelector("#btnclr").onclick = () => {
  display.textContent = "";
  a = 0;
  b = 0;
  sum = 0;
  arr = [];
  op = false;
  console.log(arr);
};
