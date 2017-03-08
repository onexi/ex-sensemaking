var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles

exercise.getCourseTitles = function(){
	var title = [];
$('h3').each(function(i,element){
	title.push($(element).text());
    });
 return title;
};

// get courses using a regular expression
exercise.getCourses = function(){
    return 'Error: getCourses function not implemented';
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    return 'Error: getWords function not implemented';
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    return 'Error: wordsFlat function not implemented';
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    return 'Error: wordsFrequency function not implemented';
};

module.exports = exercise;
