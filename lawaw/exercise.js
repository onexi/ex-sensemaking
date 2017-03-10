var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var titles = [];
    $('h3').each(function(i, element){
        titles.push($(element).text());
    });
    return titles;
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
    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    return words;
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    var wordsFlat = [];
    words.map(function(word){
        word.map(function(subword){
            wordsFlat.push(subword);
        });
    });
    return wordsFlat;
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    var wordsFrequency = wordsFlat.reduce(function(previous, current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    }, {});
    return JSON.stringify(wordsFrequency);
};

module.exports = exercise;
