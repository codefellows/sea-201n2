var people = [];

function Person(name, height, hair, age) {
  this.title = name;
  this.height = height;
  this.hair = hair;
  this.age = age;

  var fingers = 1;
  this.flipTheBird = function() {
    console.log(fingers);
  }

  people.push(this);
}

Person.prototype.flipTheBird = function() {
  console.log(fingers);
  //This does not have access to fingers
}

Person.prototype.toes = 8;
// Instance will have access to toes from protoypal inheritance

Person.prototype.sayHello = function(who) {
  console.log('Hello you wonderful person! Nice to see you, ' + who);
};

// new Person('Sam', 72, 'brown', 26);

var names = ['scott', 'sam', 'erin', 'bj'];
var heights = [72, 80, 60, 48];
var hairColor = ['brown', 'blonde', 'blonde', 'brown'];
var ages = [26, 33, 23, 45];

for (var i = 0; i < names.length; i++) {
  new Person(names[i], heights[i], hairColor[i], ages[i]);
}

//
// var sam = {
//   height: 72,
//   hair: 'brown',
//   age: 26,
//   name: 'Sam'
// };
// var erin = {
//   height: 68,
//   hair: 'brown',
//   age: 32,
//   name: 'Erin'
// };
// var daniel = {
//   height: 47,
//   hair: 'brown',
//   age: 27,
//   name: 'Daniel'
// };
