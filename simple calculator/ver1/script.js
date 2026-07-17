alert("calculator app");

let run = true;

while (run == true) {
  var a = parseInt(prompt("enter no 1"));
  var b = parseInt(prompt("enter no 2"));
  var op = prompt("choose operator");

  if (op == "+") {
    alert("a + b =" + (a + b));
  } else if (op == "-") {
    alert("a - b = " + (a - b));
  } else if (op == "*") {
    alert("a * b = " + a * b);
  } else if (op == "/") {
    alert("a / b = " + a / b);
  } else {
    alert("invalid operator");
  }

  let r = prompt("do you wish to restart");
  if (r != "yes") {
    run = false;
  }
}
