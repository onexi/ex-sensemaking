var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function () { //cheerio exercise
    // return 'Error: getCourseTitles function not implemented'; //replace this line

    var matches = [];
    matches.push('<--Header 1-->');
    $('h1').each(function (index, element) { matches.push($(element).text()); });
    matches.push('<--Header 2-->');
    $('h2').each(function (index, element) { matches.push($(element).text()); });
    matches.push('<--Header 3-->');
    $('h3').each(function (index, element) { matches.push($(element).text()); });
    return matches;

};

// get courses using a regular expression
exercise.getCourses = function () {
    //return 'Error: getCourses function not implemented';
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    return matches;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function (titles) {
    //    return 'Error: getWords function not implemented';

    var words = titles.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g);

    });
    return words;

};

// flatten the 2D words array using reduce
exercise.wordsFlat = function (words) {
    return 'Error: wordsFlat function not implemented';
var flatwords = words.reduce(function(arrays){
    
}

};

// count the word frequency using reduce
exercise.wordsFrequency = function (wordsFlat) {
    return 'Error: wordsFrequency function not implemented';
};

module.exports = exercise;
