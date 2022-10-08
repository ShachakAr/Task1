'use strict'

// 13.Airline:
console.log('ex13 - Airline')

// a. Build a data structure for an airline company.
//   (use the create function for each object).
//  Create to following entities:
//     i. A Plane. The plane will contain: 
//         1. model.
//         2. seatCount.
//     ii. A passenger - tip: use createPassenger(fullName, flights)
//         1. id (7 random digits)
//         2. fullName
//         3. flights (array of pointers to the relevant flights)
//     iii. A flight
//         1. date
//         2. departure
//         3. destination
//         4. plane (pointer to a plane)
//         5. passengers (array of pointers to the relevant passengers)

// b. Initialize all variables with consistent data -
// I.e (date should be 0 and passengers should be an empty array).


//     i. Create an array of 5 passengers (gPassengers is a good name) 
var gPassengers = [
    createPassenger(getRndStr(4, 7), []),
    createPassenger(getRndStr(4, 7), []),
    createPassenger(getRndStr(4, 7), []),
    createPassenger(getRndStr(4, 7), []),
    createPassenger(getRndStr(4, 7), []),
]

//     ii. Create an array of 2 planes.
var gPlanes = [
    createPlane(737, 400),
    createPlane(747, 500)
]

//     iii. Create an array of 2 flights - 
//         each flight has a plane property that points to a plane object,
//         and a passengers property that points to the passengers array. 
//         TIP: first create a passenger with an empty flights array, and the flight with an 
//         empty passengers array, then you can push the objects. 
var gFlights = [
    createFlight(0, 'Israel', 'India', gPlanes[0], []),
    createFlight(0, 'Italy', 'china', gPlanes[1], [])
]

console.log('gPassengers :>> ', gPassengers)
console.log('gPlanes :>> ', gPlanes)
console.log('gFlights :>> ', gFlights)

bookFlight(gFlights[1], gPassengers[0])
bookFlight(gFlights[0], gPassengers[0])
console.log(gPassengers[0])

console.log('most frequent flayer', getFrequentFlyers())



function createPlane(model, seatCount) {
    var plane = {
        model: model,
        seatCount: seatCount
    }
    return plane
}

function createPassenger(fullName, flights) {
    var passenger = {
        id: getIdNum(7),
        fullName: fullName,
        flights: flights
    }
    return passenger
}

function createFlight(date, departure, destination, plane, passengers) {
    var flight = {
        date: date,
        departure: departure,
        destination: destination,
        plane: plane,
        passengers: passengers
    }
    return flight
}

// c. Write the functions:
//     i. bookFlight(flight, passenger) -
//     this function connects between the pointers of
//     the passengers and their flights.
function bookFlight(flight, passenger) {
    if (!checkIfFlightFullyBooked(flight)){
        flight.passengers.push(passenger)
        passenger.flights.push(flight)
    }
}

//     ii. getFrequentFlyers() -
//     returns the passengers with the maximal flights count.
// TODO: something is not right. it pushes all the passengers to the array.
function getFrequentFlyers(){
    var frequentFlayer = []
    for (var i = 0; i < gPassengers.length; i++){
        var currPassenger = gPassengers[i]
        var max = 0
        if (currPassenger.flights.length > max){
            frequentFlayer =[(currPassenger)]
            max = currPassenger.flights.length
        }
        else if (currPassenger.flights.length === max) frequentFlayer.push(currPassenger)
        console.log(currPassenger)
    }
     return frequentFlayer
}

//     iii. checkIfFlightFullyBooked(flight) - checks if there are available seats on the
//     flights, and returns true if there are. Think where would it make sense to
//     invoke it 
function checkIfFlightFullyBooked(flight) {
    if (flight.seatCount === flight.passengers.length) return true
    else return false
}

