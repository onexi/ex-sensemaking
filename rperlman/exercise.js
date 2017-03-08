var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var courseTitles = [];
    $('h3').each(function(i,element){
        courseTitles.push($(element).text());
    });

    return courseTitles;
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression =/<h3>(.*?)<br><I>/g;
    var courseDesc = courses.match(expression);
    console.log(courseDesc);
    return courseDesc;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    var words = titles.map(function(title){
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
