var expect = require('chai').expect;
var ex = require('../exercise.js');
var titles = null;
var words = null;
var wordsFlat = null;

describe('Catalog Titles', function() {
	it('Number of Titles', function() {
		titles = ex.getCourseTitles();
		length = titles.length;
		expect(length).to.be.at.least(60);
	});
});

describe('Catalog Courses', function() {
	it('Number of Courses', function() {
		var courses = ex.getCourses();
		var length = courses.length;
		expect(length).to.be.at.least(60);
	});
});

describe('Titles - Word Arrays', function() {
	it('Number of word arrays', function() {
		words = ex.getWords(titles);
		var length = words.length;
		expect(length).to.be.at.least(60);
	});
});

describe('Flatten 2D word arrays with reduce', function() {
	it('Count words in flat word array', function() {
		wordsFlat = ex.wordsFlat(words);
		var length = wordsFlat.length;
		expect(length).to.be.at.least(300);
	});
});

describe('Word Frequency', function() {
	it('Count words using reduce', function() {
		scores = ex.wordsFrequency(wordsFlat);
		var length = Object.keys(scores).length;
		expect(length).to.be.at.least(100);
	});
});