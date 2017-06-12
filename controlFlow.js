var myName = "Charlie";
if (myName === "Charlie"){
  console.log("Yo, you are Charlie!");
} else if (myName === "Wood") {
  console.log(myName)
}
  else{
  console.log("Booo!");
}

// code below evaluates to false because undefined is falsy
var myName;
if (myName){
  console.log("Yo!");
} else{
  console.log("Booo!");
}

// the following is a switch statement in js

var pet = "cat";

switch(pet){
  case "cat":
    console.log("Meow!");
    break;
  case "dog":
     console.log("Woof");
     break;
  default:
  console.log("No pet, bad.");
}

// Here is a ternary in JS - this is just a short way of writing if else

1 + 1 === 2 ? console.log("yay, maths") : console.log("No! Maths is broken");
