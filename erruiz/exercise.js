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
    var expression = /<h3>(.*?)<br><I>/g;

    var matches = courses.match(expression);
    
    return matches;
    /*
    Here, we are parsing through courses and storing the content which matches expression in 'matches.'
    */
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    return titles.toLowerCase().match(/([a-z]+)/g);
    //return 'Error: getWords function not implemented';
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
