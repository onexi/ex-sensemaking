var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var $ = cheerio.load(courses);
    var titles = [];
    $('h3').each(function(i, element){
        titles.push($(element).text());
    })
    console.log(titles);
    return titles;
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    console.log(matches);
    return matches;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    var words = titles.map(function(title){
    return title.toLowerCase().match(/[a-z]+/g);

});
return words;
console.log(words);
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
