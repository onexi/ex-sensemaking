var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var CourseTitles = [];
    $('h3').each(function(i,element){
        CourseTitles.push($(element).text());
    });
    return CourseTitles;
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression = /<h3>(.*?)<br><I>/g;
    var getCourses = courses.match(expression);
    return getCourses;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(CourseTitles){
    var words = CourseTitles.map(function(title){
    return title.toLowerCase().match(/([a-z]+)/g);
    });
    return words;
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
