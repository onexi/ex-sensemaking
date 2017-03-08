var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    //return 'Error: getCourseTitles function not implemented';

    var titles = [];

    // 'each' is part of the DOM
    $('h3').each(function (i,element){

        var title = $(element).text();
        titles.push(title);

    });

    //console.log(titles);

    return titles;

};



// get courses using a regular expression
exercise.getCourses = function(){
    //return 'Error: getCourses function not implemented';

    var course_numbers = [];

    var expression = /<h3>(.*?)<br><I>/g;

    var course_numbers = courses.match(expression);

    //console.log(course_numbers);

    return course_numbers;

};





// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    //return 'Error: getWords function not implemented';

    var titles = [];
    $('h3').each(function(i, title){
        titles.push($(title).text());
    });
    
    //console.log(titles);

    // -------------------------------------------------------------
    //   YOUR CODE - use map
    // get word arrays from titles, filter our punctuation/numbers
    // -------------------------------------------------------------

    var words = titles.map(function(title){

        //return only text with no punctuation/numbers
        return title.toLowerCase().match(/([a-z]+)/g);

    });

    //console.log(words);

    return words;

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


//var titles = exercise.getCourseTitles();
//var course_numbers = exercise.getCourses();
//var clean_titles = exercise.getWords(); 
