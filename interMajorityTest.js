const readlineSync = require('readline-sync')

if (process.argv.length !== 3) {
    console.log('usage: node interMajorityTest.js majority_age')
    process.exit(1)
}

const checkValidNumber = (value) => {
    if (isNaN(Number(value))) {
        console.log('Err : please, enter a valid number. Exiting.')
        process.exit(1)
    }
}

checkValidNumber(process.argv[2])

let majorityAge = process.argv[2]

const checkValidChar = (str) => {
        if (!isNaN(Number(str))) {
            console.log('Err : please, enter a valid name. Exiting.')
            process.exit(1)
        }
}

const checkingVotingAge = (ageNumber, majorityAge) => {
    if (ageNumber >= majorityAge) {
        console.log(`Congrats ${nameStr}, you can vote!`)
    } else {
        console.log(`You can't vote ${nameStr}, you will be able to do it ${majorityAge - ageNumber} years.`)
    }
}

const asking = () => {
    nameStr = readlineSync.question('To continue, enter your first name : ', {})

    checkValidChar(nameStr)

    surNameStr = readlineSync.question('Congrats, to follow, enter your last name : ', {})

    checkValidChar(surNameStr)

    ageNumber = readlineSync.question('Congrats, to follow, enter your age : ', {})

    checkValidNumber(ageNumber)
    checkingVotingAge(ageNumber, majorityAge)

}

asking()



