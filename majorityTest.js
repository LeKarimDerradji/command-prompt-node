const readlineSync = require('readline-sync')

let majorityAge = 18

// check if your using a string as a name
const checkValidChar = (str) => {
    for (const char of Array.from(str)) {
        if (!isNaN(Number(char))) {
            console.log('Err : please, enter a valid name. Exiting.')
            process.exit(1)
        }
    }
}
// Check if your using a number as a name
const checkValidNumber = (value) => {
    for (const arg of Array.from(value)) {
        if (isNaN(Number(arg))) {
            console.log('Err : please, enter a valid number. Exiting.')
            process.exit(1)
        }
    }
}

// Asking age
const asking = () => {
    nameStr = readlineSync.question('To continue, enter your first name : ', {})


    checkValidChar(nameStr)

    surNameStr = readlineSync.question('Congrats, to follow, enter your last name : ', {})

    checkValidChar(surNameStr)

    ageNumber = readlineSync.question('Congrats, to follow, enter your age : ', {})

    checkValidNumber(ageNumber)
    checkingVotingAge(ageNumber, majorityAge)

}

// check the voting age
const checkingVotingAge = (ageNumber, majorityAge) => {
    if (ageNumber >= majorityAge) {
        console.log(`Congrats ${nameStr}, you can vote!`)
    } else {
        console.log(`You can't vote ${nameStr}, you will be able to do it ${majorityAge - ageNumber} years.`)
    }
}

asking()