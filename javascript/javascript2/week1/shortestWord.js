// Find shortest word from the given array of words

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(danishWords){
    var ShortestWord = danishWords.reduce((ShortestWord, currentWord) =>{
        return currentWord.length < ShortestWord.length ? currentWord : ShortestWord;
    }, danishWords[0]);
    return ShortestWord;
}

console.log(shortestWord(danishWords));