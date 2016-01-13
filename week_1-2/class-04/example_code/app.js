// Use document.getElementById() to connect your JS to elements on your page
var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var ans5 = document.getElementById('a5');

//THIS IS THE REFACTORED CODE WHICH APPLIES FUNCTIONS AND D.R.Y.
var counter = 0;
var questions = ['Do I like to hike?', 'How many dogs do I have?', 'What is my middle name?', 'How many fingers am I holding up?'];
var answers = ['yes', 2, 'jared', '4'];

var userName = prompt('Hello, and welcome to my game!\n What\'s your name?');
alert('Hi, ' + userName + '.\n Answer these questions about me as best you can!');

function game(question, answer) {
  var ques = prompt(question).toLowerCase();

  if (answer === ques || answer === parseInt(ques)) {
    counter++;
    alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.')
    console.log('ques valid')
  } else {
    alert('Sad trombone... You got it wrong');
    console.log('ques invalid')
  }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i]);
}

// THE CODE BELOW IS MY ORIGINAL GUESSING GAME.
//
// //
// // var questionOne = prompt('Do I like to hike?').toLowerCase();
// // if (questionOne === 'yes' || questionOne === 'y') {
// //   counter += 1;
// //   alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
// // } else {
// //   alert('Sad trombone... I\'m an avid hiker!');
// // }
// //
// // var questionTwo = prompt('How many dogs do I have?').toLowerCase();
// // if (questionTwo === 'two' || questionTwo === '2') {
// //   counter += 1;
// //   alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
// // } else {
// //   alert('Sad trombone... I have two dogs!');
// // }
// //
// // var questionThree = prompt('What is my middle name?').toLowerCase();
// // if (questionThree === 'jared') {
// //   counter += 1;
// //   alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
// // } else {
// //   alert('Sad trombone... My middle name is Jared!');
// // }
// //
// // var questionFour = parseInt(prompt('How many fingers am I holding up?'));
// // if (questionFour === 4) {
// //   counter += 1;
// //   alert('Congrats! You guessed right\n You\'ve guessed ' + counter + ' out of 5 correct.');
// // } else {
// //   alert('Sad trombone... I was holding up four fingers!');
// // }
// //
// // var questionFive = parseInt(prompt('I\'m thinking of a number.\n You have five guesses to get it right?'));
// // guesses = 5;
// //
// // while(guesses > 0) {
// //   if (questionFive === NaN) {
// //     questionFive = parseInt(prompt('Try it again with a number...'));
// //     guesses -= 1;
// //   } else if (questionFive === 44) {
// //     alert('Genius! You got it right!');
// //     counter += 1;
// //     guesses = 0;
// //   } else if (questionFive > 44) {
// //     questionFive = parseInt(prompt('You\'re a bit high. Try again'));
// //     guesses -= 1;
// //   } else if (questionFive < 44) {
// //     questionFive = parseInt(prompt('You\'re a bit low. Try again'));
// //     guesses -= 1;
// //   }
// // }
// //
// // alert('Congrats (or not)! You got ' + counter + ' out of 5 correct!');
