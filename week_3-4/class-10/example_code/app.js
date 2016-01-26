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
