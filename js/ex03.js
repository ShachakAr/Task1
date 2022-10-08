'use strict'

// 3. The Elevator 
console.log('ex03 - The Elevator')

// • Keep a currentFloor variable, initialize it to 0
var currentFloor = 0

// • Ask the user which floor would he like to go to.
var wantedFloor = +prompt('what floor would you like to go to?') 

// • Validate the floor is between -2 and 4.
// • Update the currentFloor variable accordingly.
if (wantedFloor < -2 || wantedFloor > 4) alert('this floor dosent wxist :/ ')
else {
    currentFloor = wantedFloor
    // • Let the user know his current floor.
    alert('your currnt floor is  ' + currentFloor)

    // • If the user goes to floor 0 alert 'Bye Bye'.
    if (currentFloor === 0) alert('bye bye')

    // • If the user goes to the parking lot (negative floors) alert: 'Drive Safely'. 
    if (currentFloor < 0) alert('drive safly')
}    



