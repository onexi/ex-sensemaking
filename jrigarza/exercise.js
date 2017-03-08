var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses); //to use with cheerio

// use cheerio to get course titles
exercise.getCourseTitles = function(){

        var matches = [];
        $('h3').each(function(i, element){
        matches.push($(element).text())
        })
        return matches;
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
    
        var titles = [];
        $('h3').each(function(i, title){
            titles.push($(title).text());
        });

        // -------------------------------------------------------------
        //   YOUR CODE - use map
        // get word arrays from titles, filter our punctuation/numbers
        // -------------------------------------------------------------

        var words = titles.map(function(title){
            return title.toLowerCase().match(/([a-z]+)/g);
        });

        return words;

};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){

    var totalwords = words.reduce(
        function(total, word){ return total + word }
    , '');

    return totalwords;
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){

    
    return 'Error: wordsFrequency function not implemented';
};

module.exports = exercise;
