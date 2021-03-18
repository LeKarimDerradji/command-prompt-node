const readlineSync = require('readline-sync')

const majorityAge = 0

const checkValidChar = (str) => {
    for (const char of Array.from(str)) {
        if (!isNaN(Number(char))) {
            console.log('Err : please, enter a valid name. Exiting.')
            process.exit(1)
        }
    }
}

const checkValidNumber = (value) => {
    for (const arg of Array.from(value)) {
        if (isNaN(Number(arg))) {
            console.log('Err : please, enter a valid number. Exiting.')
            process.exit(1)
        }
    }
}


const asking = () => {
        nameStr = readlineSync.question('To continue, enter your first name : ', {})


        checkValidChar(nameStr)

        surNameStr = readlineSync.question('Congrats, to follow, enter your last name : ', {})

        checkValidChar(surNameStr)

        ageNumber = readlineSync.question('Congrats, to follow, enter your age : ', {})

        checkValidNumber(ageNumber)
    
}


const checkingVotingAge = (ageNumber, majorityAge) => {
    if (ageNumber >= majorityAge) {
        console.log(`Congrats ${nameStr}, you can vote! Even if that will not change any shit, you can still do it`)
    } else {
        console.log(`You can't vote ${nameStr}, you will be able to do it ${majorityAge - ageNumber} years.`)
    }
}




exports.checkingVotingAge = checkingVotingAge
exports.checkValidChar = checkValidChar
exports.checkValidNumber = checkValidNumber
exports.asking = asking
exports.majorityAge = majorityAge