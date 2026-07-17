let rno = Math.floor(Math.random() * 101);
console.log(rno);
let gno = 0;

let running = true;

while (running) {
  gno = parseInt(prompt("guess a no. bw 0 to 100"));

  if (isNaN(gno)) {
    alert("no input");
  }
  if (gno == rno) {
    alert("suii you guessed correct");
    let temp1 = prompt("replay?");
    if (temp1 == "yes") {
      rno = Math.floor(Math.random() * 101);
      console.log(rno);
      running = true;
    } else {
      running = false;
    }
  } else {
    alert("try again");
    let hint = prompt("want hint?");
    if (hint == "yes") {
      if (gno < rno) {
        alert("you are low");
      } else {
        alert("you are high");
      }
    }
  }
}
