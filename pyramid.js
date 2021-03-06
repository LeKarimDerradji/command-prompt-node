  // Notre fonction ShowStars
  const showStars = (nbLine, argChar) => {
    for (let i = 1; i <= nbLine; i += 1) {
        console.log(argChar.repeat(i))
    }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme

if (process.argv.length !== 4) {
    console.log('usage: node stars.js number char')
    process.exit(1)
}

// Checking that the second arg. is a number

if (isNaN(process.argv[2])) {
    console.log(`Error ${process.argv[2]} is not a number`)
    process.exit(1)
}
    

// Checking that the thrid arg. is a char. 


if (!isNaN(process.argv[3])) {
    console.log(`Error ${process.argv[2]} is not a char`)
    process.exit(1)
}



// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
let nb = Number(process.argv[2])
let char = process.argv[3].toString()
showStars(nb, char)