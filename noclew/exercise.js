var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function () {
    var matches = [];
    $('h3').each(function (i, element) {
        matches.push($(element).text());
    });
    console.log(matches);

    
};


// get courses using a regular expression
exercise.getCourses = function () {
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    console.log(matches);


};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function (titles) {
    var titles = [];
    $('h3').each(function (i, title) {
        titles.push($(title).text());
    });
    console.log(titles);

    var words = titles.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g)
    });
    console.log(words);
    
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function (words) {
    
};

// count the word frequency using reduce
exercise.wordsFrequency = function (wordsFlat) {
    
};

module.exports = exercise;