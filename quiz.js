const readlineSync = require('readline-sync'),

answerOne = ['language', 'compilateur'],
otherQuestion = ['true', 'false']


index = readlineSync.keyInSelect(answerOne, 'Question 1: Le C++ est un: ')

if (answerOne[index] === 'language') {
    console.log('Yes!')
}


index = readlineSync.keyInSelect(otherQuestion, 'Question 2: TypeScript est une evolution de Javascript:')
if (otherQuestion[index] === 'true') {
    console.log('Yes!')
} else {
    console.log('False')
}

index = readlineSync.keyInSelect(otherQuestion, 'Question 3: Lire les cours avant de faire les exercices est inutile:')
if (otherQuestion[index] === 'false') {
    console.log('Yes!')
} else {
    console.log('False')
}

index = readlineSync.keyInSelect(otherQuestion, 'Question 4: react.js a ete developpe par Google:')
if (otherQuestion[index] === 'false') {
    console.log('Yes!')
} else {
    console.log('False')
}

index = readlineSync.keyInSelect(otherQuestion, 'Question 5: Ethereum est une blockchain publique:')
if (otherQuestion[index] === 'true') {
    console.log('Yes!')
} else {
    console.log('False')
}




