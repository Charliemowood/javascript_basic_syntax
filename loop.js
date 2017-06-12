// Types of loops in JavaScript

var colors = ["red", "blue", "green", "black"];

// the following loop is the most flexible for interacting with the counter
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

console.log(" ");

// using this style of loop we can go backward through the array

for (var i = colors.length - 1; i >= 0; i-- ) {
  console.log(colors[i]);
}

console.log(" ");

// this loop gets each item in the array
for (var color of colors){
  console.log(color)
}

console.log(" ");

var obj = {
  person1 : 33,
  person2 : 22,
  person3 : 11
}

// for looping through an object

for (var key in obj){
  console.log(key + + " " + obj[key]);
}

console.log(" ")

// while loops

var x = 0;

while (x < 4){
  console.log(x);
  x++;
}
