const readlineSync = require('readline-sync')

const checkValidNumber = (value) => {
    if (isNaN(Number(value))) {
        console.log('Err : please, enter a valid number. Exiting.')
        process.exit(1)
    }

}

checkValidNumber(process.argv[2])

let winningNumber = process.argv[2]



let guessedNumber = readlineSync.question('What is the number that you need to guess ? : ', {})
checkValidNumber(guessedNumber)


while (true) {
    if (guessedNumber < winningNumber) {
        console.log('too small! try again')
        guessedNumber = readlineSync.question('What is the number that you need to guess ? : ', {})
    } else if (guessedNumber > winningNumber) {
        console.log('too high! try again')
        guessedNumber = readlineSync.question('What is the number that you need to guess ? : ', {})
    } else {
        console.log('Congrat, you found the winning number')
        break
    }
}