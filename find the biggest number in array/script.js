let arr = [73, 19, 56, 8, 91, 34, 62];

const optput = arr.reduce((prev, cur) => {
  return prev > cur ? prev : cur; //simple way to write if else statement-----> condition ? iftru: else
});

console.log(optput);
