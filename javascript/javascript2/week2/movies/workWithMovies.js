//  count of movies made between 1980 and 1989
const moviesCount = movies.filter(movie => movie.year <= 1989 && movie.year >= 1980).length;
console.log(`The number of movies made between 1980 and 1989 are: ${moviesCount} `);

// movies array with tags based on ratings
let moviesTarget = [];
let moviesCopy = Object.assign(moviesTarget, movies);
const moviesTags = moviesCopy.map(movie => {
 if(movie.rating >= 7)
 movie.tag = "Good";
 else if(movie.rating<7 && movie.rating >= 4)
 movie.tag = "Average";
 else if(movie.rating < 4)
 movie.tag = "Bad";
 return movie;
});
//console.log(movies);
//console.log(moviesCopy);
console.log("Movies with tags");
console.log(moviesTags);

// chaining movies with ratings

const moviesWithRatings = movies.filter(movie => movie.rating > 6).map(movie => {
return movie.name = `${movie.title} ${movie.rating}`;
});
console.log("Movies titles with ratings");
console.log(moviesWithRatings);

//count movies with specific keywords

const moviesKeywordCount = movies.filter(movie => {
    const movieTitleKeywords = movie.title.toLowerCase().split(' ');
    if(movieTitleKeywords.includes('Surfer') || movieTitleKeywords.includes('alien') || movieTitleKeywords.includes('benjamin'))
        return movie;
    }).length;
console.log(`Total specific keywords count: ${moviesKeywordCount}`);



const duplicatedWordsInATitles = [];

 movies.map(movie => {
    const movieTitleKeywords = movie.title.split(' ');

 forEach(title => movieTitleKeywords.filter((word, index) => title.indexOf(word) !== index && 
 word !== 'a' && word !== 'The' && word !== 'of' && word !=='and'
 ?  duplicatedTitles.push(word) : false));
   
})
console.log(duplicatedWordsInATitles); 

// find movies with duplicate words
const getDuplicateWord = movies.filter((movie) => {
    var duplicateWord = /\b(\w+)\b.*\b\1\b/g.test(movie.title);
    return duplicateWord;
  });
  console.log(getDuplicateWord);
