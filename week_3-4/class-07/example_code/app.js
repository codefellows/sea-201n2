// Not the prefered way to create an Object
// var turtle = Object();
// console.log(turtle);

var turtle = {
  color: 'Blue',
  legs: 4,
  ninja: true,
  hunger: 4,
};

// function turtle.eat() {
//   // This will not work!
// }

turtle.eat = function(isHungry) {
  if (isHungry > 5) {
    console.log('Get me some of dat pizza!');
  } else if (isHungry <= 5) {
    console.log('I\'m full Brah');
  }
};

turtle.getColor = function() {
  return this.color;
};

turtle.randomHunger = function(min, max) {
  return Math.random() * (max - min) + min;
};


// Quick review of when to use semi-colons
// function beans() {
//   // Do some code
// }
//
// var beans = function() {
//   // Do some code
// };

// This is a basic create html and render to page example
// var sectionEl = document.getElementById('myList');
// sectionEl.textContent = 'Hello World!';
//
// var ulEl = document.createElement('ul');
// var liEl = document.createElement('li');
// liEl.textContent = 'I like grapes.';
//
// ulEl.appendChild(liEl);
// // target.appendChild(content)
//
// sectionEl.appendChild(ulEl);


// This is a more advanced for loop inside for loop for nested lists
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weeks = [1, 2, 3, 4];
var sectionEl = document.getElementById('myList');
var ulEl = document.createElement('ul');

for(month in months) {
  var liEl = document.createElement('li');
  liEl.textContent = months[month];
  var nestedUlEl = document.createElement('ul');

  for(week in weeks) {
    var nestedLiEl = document.createElement('li');
    nestedLiEl.textContent = weeks[week];
    nestedUlEl.appendChild(nestedLiEl);
  }

  liEl.appendChild(nestedUlEl);
  ulEl.appendChild(liEl);
}

sectionEl.appendChild(ulEl);
