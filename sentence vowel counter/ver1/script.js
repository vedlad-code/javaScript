let count = 0;
function vowels(str) {
  str = prompt("enter a string");
  for (i in str) {
    if (str[i] == "a") {
      count++;
    }
    if (str[i] == "e") {
      count++;
    }
    if (str[i] == "i") {
      count++;
    }
    if (str[i] == "o") {
      count++;
    }
    if (str[i] == "u") {
      count++;
    }
  }
  console.log(`the no of vowel in "${str}" is ${count}`);
}

vowels();
