'use strict'

// 12.Students: 
console.log('ex 12 - students')

var gNextId = 101
var gStudents = createStudents()
console.log('gStudents after avg ', setStudentAvg(gStudents))
console.log('worst student Avg ', findWorstStudent(gStudents)) 
console.log('sorted by avg ', sortStudentsByGrade(gStudents))
console.log('sorted by name ', sortStudentsByName(gStudents))

// a. Create a students array (use the same algorithm as before and name it 
// createStudents())
// b. Read the student name from the user until “quit” is entered.
//  Populate the students array with student objects. 
function createStudents() {
    var students = []
    var name = prompt('student name?' + '\n' + 'type "quit" to continue')
    if (name === '') name = getRndStr(4,8)
    while (name !== 'quit') {
        students.push(createStudent(name))
        name = prompt('student name?' + '\n' + 'type "quit" to continue')
        if (name === '') name = getRndStr(4,8)
    } 
    return students
}

function createStudent(name) {

    var student = {
        name: name,
        id: gNextId++,
        grades: getGrades(3)
    } 
    return student
} 

// c. Read 3 grades for each student
//  (each student should have a grades array).
function getGrades(num){
    var grades = []
    for (var i = 0; i < num; i++){
        var rndGrade = getRandomIntInclusive(0, 100)
        grades.push(rndGrade)
    }
    return grades
}

// d. Calculate the average of each student. 
function setStudentAvg(students){
    var sum = 0 

    for (var i = 0; i < students.length; i++){
        var currStudent = students[i]
        for (var j = 0; j < currStudent.grades.length; j++){
            sum += currStudent.grades[j]
        }
        currStudent['avg'] = (sum / (currStudent.grades.length))
        sum = 0
    }
    return students
}

// e. Write the function findWorstStudent(students).
function findWorstStudent(students){
    var worstStudent = Infinity 
    for (var i = 0; i < students.length; i++){
        if (students[i].avg < worstStudent) worstStudent = students[i].avg
    }
    return worstStudent
}

// f. Write the function sortStudentsByGrade(students).

function sortStudentsByGrade(students){
    var studentsCopy = students.slice()
    studentsCopy.sort(function (s1, s2){
        return s2.avg - s1.avg // HIGHEST TO LOWEST
        // return s1.avg - s2.avg // LOWEST TO HIGHEST
    })
    return studentsCopy
}


// g. Write the function sortStudentsByName(students)

function sortStudentsByName(students){
    var studentCopy = students.slice()
    studentCopy.sort(function (s1, s2){
        if (s1.name.toLowerCase() > s2.name.toLowerCase()) return 1
        if (s1.name.toLowerCase() < s2.name.toLowerCase()) return -1
        return 0
    })
    return studentCopy
}
