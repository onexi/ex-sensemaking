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
   // console.log('Q1: '+titles);
   
    return titles;
   
};

// get courses using a regular expression
exercise.getCourses = function(){
    
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
  //  console.log(matches.length);

    return matches;      
};

// get title word arrays, filter out punctuation/numbers
// use map

exercise.getWords = function(titles){ 
    
    
    function lowerC(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    }
    return titles.map(lowerC);
};

// flatten the 2D words array using reduce
exercise.wordsFlat = function(words){

    var wordarray = [];

    function flatten (item, counter, array){
        wordarray.push(item);
    }

 //  console.log ('Q4: words:   '+words);
    
    words.reduce(function(prev, curr){
        //console.log(curr);
        curr.forEach(flatten);   
    }, []);

    return wordarray;

};

// count the word frequency using reduce
exercise.wordsFrequency = function(wordsFlat){

   // var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    wordsFlat.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    console.log('Q9 freqMap: ' +freqMap['engineering'] );
    return freqMap;


        


    /* Now that `counts` has our object, we can log it. */
    



  /* 
    var scoreboard = {
        str: '',
        count: 0
    };

    wordsFlat.reduce(function(curr, prev){

    }, []);

*/





};

module.exports = exercise;
