//import the "elevator.js" file into the program
const Elevator = require('./elevator.js');

//import the "person.js" file into the program
const Person = require('./person.js');


//create our elevator
const myElevator = new Elevator();

//start the elevator's automatic movement
myElevator.start();

//stop the elevator after 20 seconds
setTimeout(() => {
  myElevator.stop();
}, 20000);


//For iteration 2: call function "floorUp();"" and "floorDown();""

// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
//
// myElevator.floorDown();
