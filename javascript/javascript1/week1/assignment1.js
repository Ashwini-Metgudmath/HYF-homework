// freecode camp name Ashwini Metgudmath
// All assignments all javascript week1 

//Age-ify  (A future age calculator)
const yearOfBirth = 1990;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in 2027`);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2019;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear*7;;
const shouldShowResultInDogYears  = false;
if(shouldShowResultInDogYears)
{
    console.log(`Your dog will be ${dogYear} dog years old in 2027`);
}
else{
    console.log(`Your dog will be ${humanYear} human years old in 2027`);
}

// Housey pricey (A house price estimator)
const peterHouseVolume = 8*10*10;
const julieHouseVolume = 5*11*8;
const gardensizes = [100, 70];
const paidPrices = [2500000, 1000000];
const volumeInMeters = [peterHouseVolume, julieHouseVolume];
const peterHousePrice = volumeInMeters[0]*2.5*1000+gardensizes[0]*300;
const julieHousePrice = volumeInMeters[1]*2.5*1000+gardensizes[1]*300;
const peterExtraPay = paidPrices[0]-peterHousePrice;
const julieExtraPay = julieHousePrice-paidPrices[1];
console.log(`Peter has paid ${peterExtraPay} more than actual price`);
console.log(`Julie has paid ${julieExtraPay} less than actual price`);

//Ez Namey (Startup name generator) Optional
const firstWords = ['Creative', 'Smart', 'Just', 'Calibre', 'Great', 'Unique', 'Hygge'];
const secondWords = ['Code', 'Solutions','Move', 'Game', 'Services', 'Technologies', 'Soft'];
const startUpName = firstWords[Math.floor(Math.random() * 7) + 0] +' '+ secondWords[Math.floor(Math.random() * 7) + 0];
console.log(`The startup ${startUpName} contains ${startUpName.length} characters`);
