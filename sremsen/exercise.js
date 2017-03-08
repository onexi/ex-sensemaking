var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    // return an array of courses
    var matches = [];
    $('h3').each(function(i, element){
        matches.push($(element).text());
    });
    return matches;
    //return 'Error: getCourseTitles function not implemented';
};

// get courses using a regular expression
exercise.getCourses = function(){
    
    // trying to return the course description, not just the course title
    // use <br><I> to get the entire course description
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    return matches;
    
    //return 'Error: getCourses function not implemented';
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    

    var words = titles.map(function(title){
    // regex - find all the words with letters not punctation 
    //regex first //g then () inside
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
