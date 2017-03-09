var exercise = require('./exercise.js');

// use cheerio to get course titles
var titles = exercise.getCourseTitles();
//console.log(titles);

// get courses using a regular expression
var courses = exercise.getCourses();
//console.log(courses);

// get title word arrays, filter out punctuation/numbers
// use map
var words = exercise.getWords(titles);
//console.log(words[1]);

// flatten 2D words array using reduce
var wordsFlat = exercise.wordsFlat(words);
//console.log(wordsFlat);

// count words - get word frequency using reduce
var scores = exercise.wordsFrequency(wordsFlat);
console.log(scores);
