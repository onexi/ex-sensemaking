var cheerio = require('cheerio');
var courses = require('./mitcourses_one.js');
var exercise = {};
var $ = cheerio.load(courses);

// use cheerio to get course titles

exercise.getCourseTitles = function(){

    var matches =[];

    $('h3').each(function(i,element){ //each is like forEach
        matches.push($(element).text());
    });
    console.log(matches);
    console.log($('h3'))
    return matches;
    //return 'Error: getCourseTitles function not implemented';
};

// get courses using a regular expression
exercise.getCourses = function(){
    
    var expression=/<h3>(.*?)<br><I>/g;
    var matches=courses.match(expression);
    console.log(matches);
    
    return matches;
};

// get title word arrays, filter out punctuation/numbers
// use map
exercise.getWords = function(titles){
    
    
var words=titles.map(function(title){
    return title.toLowerCase().match(/([a-z]+)/g);
});
console.log(words);
return words;
    //return 'Error: getWords function not implemented';
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){
    
    //var joined=words.reduce(function(total,increment){
      //  total+=increment;
    //},'');
    joined=words.join();
    console.log(joined);
    return joined;
    //return 'Error: wordsFlat function not implemented';
};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){
    return 'Error: wordsFrequency function not implemented';

    //var wordsList=[]

    // var wordsList=wordsFlat.filter(function(item,i,full){
    //     return full.indexOf(item)===i;
    // });

    // return wordsList.length();



};

module.exports = exercise;
