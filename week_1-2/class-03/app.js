//Example code may not run all at once; meant for reference only.

var userAnimal = prompt('What animal am I thinking of?').toUpperCase();
if (userAnimal === 'DOG' || userAnimal === 'D') {
  console.log('You got it right!');
} else if (userAnimal !== 'DOG' || userAnimal !== 'D') {
  console.log('That\'s not right!');
}


var arr = [1, 2, 'Scott', true, 'Apple'];
for (var i = 0; i < arr.length; i++) {
  // for (start; stop; step) { Do some code; }
  if (typeof arr[i] === 'boolean') {
    // arr[i] === the current value of arr @ 'i' in the for loop
    console.log(arr[i] + ' is a boolean!');
  } else {
    console.log(arr[i] + ' is NOT a boolean!');
  }
  console.log(arr[i]);
}


do {
  // This code will always execute at least once, and then check for the while conditional
  if (arr[0] === 2) {
    console.log('Hello World!');
  } else {
    console.log('Goodbye World!');
  }
} while (true);


while (true) {
  // This code will only evaluate if the while conditional is true; otherwise it will skip over and move on
  if (arr[0] === 2) {
    console.log('Hello World!');
    break
  } else {
    break
  }
}
