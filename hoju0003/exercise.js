var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
	
	var subArr= [];
	
	$ = cheerio.load(courses);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

	console.log(subArr.length);
	return subArr;
	//return 'Error: getCourseTitles function not implemented';
};

// get courses using a regular expression
exercise.getCourses = function(){
	
	var expression=/<h3>(.*?)<br>/g
	var matches= courses.match(expression);
	return matches;

    //return 'Error: getCourses function not implemented';
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
	
	var words= titles.map(function(title){
	
	return title.toLowerCase().match(/([a-z]+)/g);
	
});
return words;	
	
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
