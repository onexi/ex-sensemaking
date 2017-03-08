var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles
exercise.getCourseTitles = function(){
    var titles = [];
    $('h3').each(function(i,element){
        titles.push($(element).text());
    });
    return titles;
    console.log(titles);
};

// get courses using a regular expression
exercise.getCourses = function(){
    var expression = /<h3>(.*?)<br><I>/g;
    var descriptions = courses.match(expression);
    return descriptions;
    console.log(descriptions);
};

// get title word arrays, filter out punctuation/numbers
// use map
   
exercise.getWords = function(titles){
    var titles = exercise.getCourseTitles();
    var words = titles.map(function(titles){
        return titles.toLowerCase().match(/[a-z]+/g);
    });
    console.log(words);
    return words;
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    var words = exercise.getWords();

    var flatten = function(previous, current){return (previous+current);};
    var wordsFlat = words.reduce(flatten,'');
    return wordsFlat;
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    var wordsFlat = exercise.wordsFlat();

var wordCountArray = wordsFlat.map(function(item){
    var counter = 0;
    var itemCount = wordsFlat.reduce(function(previous, current){
        if(current==item){
            counter++;
        }
        return;
    },0);

    return item+": "+counter;
})

return wordCountArray;  

}

module.exports = exercise;
