'use strict'

console.log('ex11 - Monsters')

// b. Write the functions:
// i. createMonsters()
// ii. createMonster(name, power) – returns a new monster object. The name and 
// power parameters are optional. That means that you should set them to a 
// defaultive value if nothing is sent in the parameters.

var nextId = 101

var gMonsters = createMonsters(4)
console.log('gMonsters :>> ', gMonsters);

// console.log('moster id : ', getMonsterById(102))

// var deletedArray = deleteMonster(103)
// console.log(deletedArray)

// updateMonster(104, 47.22)

// console.log(findMostPowerful(gMonsters))


// CREATES AN ARRAY OF MONSTERS
function createMonsters(num) {
    var monsters = []
    for (var i = 0; i < num; i++) {
        var name = prompt('monster\'s name:')
        if (name === '') name = getRndStr(4,8)
        var power = getRandomIntInclusive(1, 100)
        monsters.push(createMonster(name, power))
    }
    return monsters
}

// CREATES A MONSTER OBJECT
function createMonster(name, power) {
    var monster = {
        id: nextId++,
        name: name,
        power: power
    } 
    return monster
} 

// iii. getMonsterById(id) - finds and returns a monster object by its id.
function getMonsterById(id){
    for (var i = 0; i < gMonsters.length; i++){
        if (gMonsters[i].id === id) return gMonsters[i]
    }
}

// DOSN'T CAHNGE THE ORIGINAL ARRAY
function deleteMonster(id){
    var newArray = []
    for (var i = 0; i < gMonsters.length; i++){
        if (gMonsters[i].id !== id) newArray.push(gMonsters[i])
    } return newArray
}


// v. updateMonster(id, newPower) - the function updates the specified monster,
// setting a new power.
function updateMonster(id, newPower){
    var monster = getMonsterById(id)
    monster.power = newPower
} 

// TODO: IF TWO OR MORE ARE THE STRONGEST.
// c. Write the function: findMostPowerful(monsters).
function findMostPowerful(monsters){
    var mostPowerfull = [{power: 0}]
    for (var i = 0; i < monsters.length; i++){
        if (monsters[i].power > mostPowerfull[0].power){
            mostPowerfull.splice(0, 1, (monsters[i])) 
        }
    } return mostPowerfull
}

// d. Write the function: breedMonsters(monsterId1, monsterId2), the function returns a
// new monster. The breeded monster power is an average of its parents power. The
// name is the beginning half of the first parent name, and the second half is the end of
// the second parent name. 

function breedMonsters (monsterId1, monsterId2){
    var newMonster = {}
    var monster1 = getMonsterById(monsterId1)
    var monster2 = getMonsterById(monsterId2)
    var firstHalfName = monster1.name.slice(0, (monster1.name.length / 2))
    var lastHalfName = monster2.name.slice(monster2.name.length / 2)
    newMonster.name = firstHalfName + lastHalfName
    newMonster.power = (monster1.power + monster2.power) / 2
    newMonster.id = nextId++
    return newMonster
}