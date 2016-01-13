//Function Declaration (Use this to create your functions)
sayHello();
function sayHello() {
  console.log('Hello World');
}

//Function Expression (Don't use this at this point)
var sayGoodbye = function() {
  console.log('Goodbye World');
};
sayGoodbye();

//This is a function declaration using parameters
function sumTwoNums(numOne, numTwo) {
  return numOne + numTwo;
}
var num = sumTwoNums(32, 3); //expected return value of 35 stored in num var.

function subtractFromFifty(numOne) {
  var fifty = 50;
  return fifty - numOne;
}
