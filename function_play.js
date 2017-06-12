// function for greeting using first name and surname

function greet(first_name, surname){
  console.log("Howdy, I am " + first_name + " " + surname + ".");
}
greet("Chaz", "The baz");

// Function for multiplication

function multiply(a, b){
  return a * b;
}

console.log(multiply(5, 3));

// Function for getting out first element of an array

function firstArray(array){
  return array[0];
}

console.log(firstArray(["Garry", "Barry"]));

// Function for listing all name in given as parameters

function nameTaker(){
  var string = "";
  for (var i = 0; i < arguments.length; i++){
    string += console.log(arguments[i]);
  }
}
nameTaker("Gaz", "Chaz", "Baz", "Daz", "Raz", "Saz");


// Function being invoke in another function

var addition = function(a, b){
  return a + b;
}

var specialFunction = function(functionToInvoke){
  console.log(functionToInvoke(3, 4));
}

specialFunction(addition);
