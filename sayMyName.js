// Capitalize the first letter 

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

// Check if an argument is entered in the command line prompt by the user

if (process.argv.length !== 3) {
    console.log('usage: node sayMyName.js yourname')
    process.exit(1)
}

// Transform the argument passed by the user as an array, to check of any of the char is a number or not
let argCharArray = Array.from(process.argv[2])

// The actual code to check if it's a number or not, using a for of loop

for (const args of argCharArray) {
    if ((!isNaN(Number(args)))) {
        console.log(`Error: '${args}' is not a string! usage : node sayMyName.js yourname`)
        process.exit(1)
    }
}

// If everything is going alright, assing the argument to a const nameStr
// Capitalize the first letter. 

const nameStr = process.argv[2]
const nameCapitalize = nameStr.charAt(0).toUpperCase() + nameStr.slice(1)

// Pure function to say hello to the user based on a process argument 

sayHello = (arg) => {
    console.log(`Hello, ${arg}`)
}

// Function calling 

sayHello(nameCapitalize)