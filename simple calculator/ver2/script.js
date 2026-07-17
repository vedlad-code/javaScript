function calculate(x, y) {
  if (op == "+") {
    return x + y;
  } else if (op == "-") {
    return x - y;
  } else if (op == "*") {
    return x * y;
  } else if (op == "/") {
    return x / y;
  } else {
    return "wrong";
  }
}

let run = true;

while (run == true) {
  let a = parseInt(prompt("enter a no"));
  let b = parseInt(prompt("enter a no"));
  op = prompt("choose operator");

  if (calculate(a, b) == "wrong") {
    alert("wrong op");
  } else {
    alert(calculate(a, b));
    let temp = prompt("continue");
    if (temp == "no") {
      run = false;
    } else {
      run = true;
    }
  }
}
