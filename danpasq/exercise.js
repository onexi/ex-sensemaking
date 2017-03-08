var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var courselist = [];
    $('h3').each(function(i, element){
        courselist.push($(element).text());
    });
    return courselist;
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    return matches;

};

// get title word arrays, filter out punctuation/numbers
// use map


exercise.getWords = function(titles){
    var courselist = [];
    $('h3').each(function(i, element){
        courselist.push($(element).text());
    });
    
    var words = courselist.map(function(title){
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
