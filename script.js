// Array of names
var names = ["John", "Jane", "Paul", "Mike", "jim", "Sara", "George"];

// Loop over the array
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0).toLowerCase(); // Get first letter and convert to lowercase

  if (firstLetter === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}

