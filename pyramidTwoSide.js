let nbBaseInput = process.argv[2]
let sideInput = process.argv[3]
let strInput = process.argv[4]

const showStars = (nbBase, reverse, str) => {
    if (sideInput === 'false') {
      for (let i = 1; i <= nbBase; ++i) {
        console.log(str.repeat(i))
      }
    } else {
      for (let i = nbBase; i >= 1; --i) {
        console.log(str.repeat(i))
      }
    }
  }

  showStars(nbBaseInput, sideInput, strInput)
  
 