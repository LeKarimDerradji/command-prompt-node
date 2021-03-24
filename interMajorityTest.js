const readlineSync = require('readline-sync')


// Check if the user enters one arg. in the command line. 
if (process.argv.length !== 3) {
    console.log('usage: node interMajorityTest.js majority_age')
    process.exit(1)
}

// A pure function to check if a value is a number 
const checkValidNumber = (value) => {
    if (isNaN(Number(value))) {
        console.log('Err : please, enter a valid number. Exiting.')
        process.exit(1)
    }
}

// Checking if the arg. entered is a valid number. 
checkValidNumber(process.argv[2])

let majorityAge = process.argv[2]


// A pure function to check if a value is a char
const checkValidChar = (str) => {
        if (!isNaN(Number(str))) {
            console.log('Err : please, enter a valid name. Exiting.')
            process.exit(1)
        }
}

// Func. to check if the age of the user is superior or equal to the age of majority in the country of residence.
const checkingVotingAge = (ageNumber, majorityAge) => {
    if (ageNumber >= majorityAge) {
        console.log(`Congrats ${nameStr}, you can vote!`)
    } else {
        console.log(`You can't vote ${nameStr}, you will be able to do it ${majorityAge - ageNumber} years.`)
    }
}

// Func. to actually asks all the info of the user and compare their age to the majority age. 
const asking = () => {
    nameStr = readlineSync.question('To continue, enter your first name : ', {})

    checkValidChar(nameStr)

    surNameStr = readlineSync.question('Congrats, to follow, enter your last name : ', {})

    checkValidChar(surNameStr)

    ageNumber = readlineSync.question('Congrats, to follow, enter your age : ', {})

    checkValidNumber(ageNumber)
    checkingVotingAge(ageNumber, majorityAge)

}


// Calling the function. 

asking()



