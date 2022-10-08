'use strict'

// 2. Rolling Project: BankSystem
console.log('ex02 - BankSystem')

// • Initialize a variable: currBalance with the value: 1000
var currBalance = 1000
const pinCode = '0796'


// • Prompt the user to get a secret pin code, ‘0796’.
var secretPinCode = prompt('enter your pin code:')

// • After it was validated to be true
// • If the code was wrong, alert with a different message,
//  and don’t let him to withdraw the sum.
while (secretPinCode !== pinCode) {
    alert('wrong pin-code!' + '\n' + 'Try again')
    secretPinCode = prompt('enter your pin code:')
}

// ask the user how much would he like to withdraw. 
var withdrawalAmount = +prompt('How much would you like to withdraw?')

// • Add a feature: don’t let the user withdraw more than he has in his account. 
while (withdrawalAmount > currBalance || withdrawalAmount <= 0) {
    alert('insufficient funds')
    withdrawalAmount = +prompt('How much would you like to withdraw?')
}

//Print a nice message with the new balance.
var currBalance = 1000 - withdrawalAmount
alert('your new balance is ' + currBalance)
console.log('currBalance :>> ', currBalance);


