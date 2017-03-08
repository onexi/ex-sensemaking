var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var cheerio = require('cheerio');
    var data = courses;
    $ = cheerio.load(data);
    var matches = [];

    $('h3').each(function(i, element){
	matches.push($(element).text());
});
    return matches;
};

// get courses using a regular expression
exercise.getCourses = function(){
    var patt = /<h3>(.*?)<br>/g;
    var arr  = [];
    while(match=patt.exec(courses)){
        arr.push(match[1]);
    }
    console.log(arr);
    return arr;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    var update_titles = titles.map(function(entry){
        var entry2 = entry.toLowerCase()
        var entry2 = entry2.match(/([a-z]+)/g)
        return entry2
    });
    return update_titles;
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    console.log(words);
    return 'Error: wordsFlat function not implemented';
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    return 'Error: wordsFrequency function not implemented';
};

module.exports = exercise;


