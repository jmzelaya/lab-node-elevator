class Elevator {
  constructor(){
    //floor where the elevator currently is
    this.floor      = 0;
    this.setVar = [];
    //current direction that the elevator is moving in
    //("up" or "down")
    this.direction = 'up';
    //top floor of the building (max value of "this.floor")
    this.MAXFLOOR   = 10;

    //an array of person objects
    //represents people on the elevator waiting to be dropped off
    this.passengers = [];
    //an array of person objects that represent people waiting to be picked up
    this.waitingList = [];
    //an array of numbers of the floors which the elevator must stop
    //(either to drop off or pick up)
    this.requests = [];
  }

  start() {
    //begin a setInterval that calls "update()" every second
    this.setVar = setInterval(this.update(), 1000);
  }
  stop() {
    //cancel the setInterval started by "start()"
    clearInterval(this.setVar);
  }
  update() {
    this.log();
  }
  log() {
    //displays the current disrection and current floor
    //Examples:
    // "Direction: down | floor 3"
    // "Direction: up | floor 5"
    console.log("Direction: " + this.direction + " | Floor: " + this.floor);
  }


  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor <= this.MAXFLOOR ){
      this.floor += 1;
      return this.floor;
    }


  }
  floorDown() {
    if(this.floor <= this.MAXFLOOR){
      this.floor -= 1;
      return this.floor;
    }

  }
  call() { }

}

module.exports = Elevator;
