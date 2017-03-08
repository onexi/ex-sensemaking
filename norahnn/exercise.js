var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var output=[];
    $('h3').each(function(i,element){
    	output.push($(element).text())
    })
    return output;
};

// get courses using a regular expression
exercise.getCourses = function(){
	var expression = /<h3>(.*?)<br><I>/g;
	var output = courses.match(expression);
	return output;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
	var titles = [];
	$('h3').each(function(i, title){
		titles.push($(title).text());
	});
    var output = titles.map(function(title){
    	return title.toLowerCase().match(/([a-z]+)/g);
    });
   	return output;
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
