function sum(event, x) {
  return x + 1;
}

target.addEventListener('click', sum, x)
// sum(2) --> 3

function sumAgain(func) {
  return func + 1;
}

// sumAgain(sum(2)) --> 4
