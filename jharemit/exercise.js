var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var matches = [];

        $('h3').each(function(i,element){ //this is similar to foreach that we did in last homework
            matches.push($(element).text());
        })
        console.log(matches);

    return matches
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression = /<h3>(.*?)<br><I>/g;  //<h3> = starts with the header, (.*?) = everything in between the bolds, <\/b> closes the search
    var matches = courses.match(expression);
    console.log(matches);
    return matches
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    var words = titles.map(function(title){
	    return title.toLowerCase().match(/([a-z]+)/g);
    });
    console.log(words)
    return words
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    var reducedWords = words.reduce(function(previousValues, currentValues) {
        return previousValues.concat(currentValues)
    }, []);
    console.log(reducedWords);
    return reducedWords
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    var wordCount = wordsFlat.reduce(function(previous, current){
	previous[current] = ++previous[current]||1;
	return previous;
}, {});

var count = wordsFlat.map(wordCount);
console.log(count);
};

module.exports = exercise;
