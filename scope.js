var name = "Chaz"; // this can be seen from functions this is a global variable

var talk = function(){
  var name = "Garry"; // this variable is only accessible to this method
  // for this method it overrides the global variable
  // if I put just name = "Garry" then it would override the global variable
  console.log("My name is " + name + ".");
}
