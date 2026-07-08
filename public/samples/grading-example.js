const {calculateLetterGrade, calculateAverageScore} = require('../modules/grading-helpers');

console.log(calculateLetterGrade(93));

const testScores = [90, 80];
console.log(calculateAverageScore(testScores));