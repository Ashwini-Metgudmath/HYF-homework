// Candy helper application
boughtCandyPrices = [];
amountToSpend = Math.random() * 100;
function addCandy(candyType, weight){
if(candyType == ""){
    return "Enter candy type";
}
else if(weight == ""){
    return "Enter  weight of candy";
}
else if(candyType == "Sweet"){
    boughtCandyPrices.push(0.5*weight);
}
else if(candyType == "Chocolate"){
    boughtCandyPrices.push(0.7*weight);
}
else if(candyType == "Toffee"){
    boughtCandyPrices.push(1.1*weight);
}
else if(candyType == "Chewing-gum")
boughtCandyPrices.push(0.03*weight);
}

addCandy("Sweet", 10);
addCandy("Chewing", 5);
addCandy("Toffee", 6);
console.log(boughtCandyPrices);

function canBuyMoreCandy(){
var sumOfPrices = 0;
for(var i=0; i<boughtCandyPrices.length; i++){
    sumOfPrices+= boughtCandyPrices[i];
}
console.log(`Amount to spend: ${amountToSpend}`);
console.log(`Sum of prices of candy: ${sumOfPrices}`);
if(sumOfPrices < amountToSpend){
    return "You can buy more, so please do!";
}else{
    return "Enough candy for you!";
}
}

console.log(canBuyMoreCandy());