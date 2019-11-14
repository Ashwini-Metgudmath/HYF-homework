// Double only odd numbers of a given array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = numbers.filter(number => number %2 !== 0).map((number) =>{
  const newNumber = number*2;
  return newNumber;
});

console.log(`Doubled new numbers are: ${newNumbers}`);