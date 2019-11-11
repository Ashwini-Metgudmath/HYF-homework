// find a avarage and median of a given set of numbers

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000];
function findAvg(housePrices){
// find sum of the array items
let sum = housePrices.reduce((current, previous) =>
current += previous);
// Average of array items
let avg = Number(sum/housePrices.length).toFixed(2);
return `Average of given numbers: ${avg}`;
}

function findMedian(housePrices){

// sort given numbers in asscending order
housePrices.sort((a, b)=> a-b); 

// find index of mid number of sorted array
const mid = Math.floor((housePrices.length)/2); 

// if count of array items is odd
if(housePrices.length %2 !== 0){ 
return `Median of given numbers: ${housePrices[mid]}`;
}
// if count of array items is even
else{
    return `Median of given numbers: ${(housePrices[mid-1]+housePrices[mid])/2}`;
}
}
console.log(findAvg(housePrices));
console.log(findMedian(housePrices));