let first = 0;
let second = 1;

const fibonacci = (n) => {
  console.log(first);
  console.log(second);
  for (let i = 1; i < n; i++) {
    finalno = first + second;
    first = second;
    second = finalno;
    console.log(finalno);
  }
};
