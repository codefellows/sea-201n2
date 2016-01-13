var counter = 0;
var userName = prompt('Hello, and welcome to my game!\n What\'s your name?');
alert('Hi, ' + userName + '.\n Answer these questions about me as best you can!');

var questionOne = prompt('Do I like to hike?').toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  counter += 1;
  alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
} else {
  alert('Sad trombone... I\'m an avid hiker!');
}

var questionTwo = prompt('How many dogs do I have?').toLowerCase();
if (questionTwo === 'two' || questionTwo === '2') {
  counter += 1;
  alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
} else {
  alert('Sad trombone... I have two dogs!');
}

var questionThree = prompt('What is my middle name?').toLowerCase();
if (questionThree === 'jared') {
  counter += 1;
  alert('Congrats! You guessed right.\n You\'ve guessed ' + counter + ' out of 5 correct.');
} else {
  alert('Sad trombone... My middle name is Jared!');
}

var questionFour = parseInt(prompt('How many fingers am I holding up?'));
if (questionFour === 4) {
  counter += 1;
  alert('Congrats! You guessed right\n You\'ve guessed ' + counter + ' out of 5 correct.');
} else {
  alert('Sad trombone... I was holding up four fingers!');
}

var questionFive = parseInt(prompt('I\'m thinking of a number.\n You have five guesses to get it right?'));
guesses = 5;

while(guesses > 0) {
  if (questionFive === NaN) {
    questionFive = parseInt(prompt('Try it again with a number...'));
    guesses -= 1;
  } else if (questionFive === 44) {
    alert('Genius! You got it right!');
    counter += 1;
    guesses = 0;
  } else if (questionFive > 44) {
    questionFive = parseInt(prompt('You\'re a bit high. Try again'));
    guesses -= 1;
  } else if (questionFive < 44) {
    questionFive = parseInt(prompt('You\'re a bit low. Try again'));
    guesses -= 1;
  }
}

alert('Congrats (or not)! You got ' + counter + ' out of 5 correct!');
