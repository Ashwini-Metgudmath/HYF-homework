// Generate sprit name for a given animal
const spritNames = ['The fullmoon wolf', 'The crying butterfly', 'The life enrgry Horse', 'The lion king', 'A cute cat', 
' A honest dog', 'Clam cow', 'Scary snake', 'Cunning fox', 'Foolish donkey', 'Cute goat'];


const button = document.querySelector('#Button');
button.addEventListener('click', () =>{

const name = document.querySelector('input');
const outputTag = document.querySelector('#output');

const randomNum =  Math.floor((Math.random() * 10) + 1);

if(name.value){
    const spiritName = spritNames[randomNum];
    outputTag.innerHTML = `<p>${name.value} - ${spiritName}</p>`;
}
else{
    outputTag.innerHTML = `<p>Please enter the name</p>`
}

console.log(outputTag);
})