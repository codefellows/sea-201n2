// Quick overview of how to set up an event listener
var formEl = document.getElementById('userInfo');
var nameInput = document.getElementById('name');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  // Alternative way to get the value out of an input field.
  // var getName = nameInput.value;
  console.log(event.target);
  event.target.name.value = null;
});



// This is a quick and dirty example of building a table from array data.
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weeks = [1, 2, 3, 4];
var tableEl = document.getElementById('myTable');
var trEl = document.createElement('tr');

for(month in months) {
  var tdEl = document.createElement('td');
  tdEl.textContent = months[month];
  trEl.appendChild(tdEl);
}

tableEl.appendChild(trEl);
