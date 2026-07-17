let str = prompt("enter a string");
let count = 0;
for (let char of str) {
  if (["a", "e", "i", "o", "u"].includes(char)) {
    count++;
  }
}
console.log(`the no of vowel in "${str}" is ${count}`);
