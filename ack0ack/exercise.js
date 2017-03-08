var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
var matches = [];

$('h3').each(function(i,element){
    matches.push($(element).text());
});
console.log(matches);

exercise.getCourseTitles = function(){
    return 'Error: getCourseTitles function not implemented';
};

// get courses using a regular expression
exercise.getCourses = function(){

        //return the course description, not just title 
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    return matches;

};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    return 'Error: getWords function not implemented';
};

var words = titles.map(function(titles){
	return titles.toLowerCase().match(/([a-z]+)/g);
});
return words;

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    return 'Error: wordsFlat function not implemented';
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    return 'Error: wordsFrequency function not implemented';
};

module.exports = exercise;
