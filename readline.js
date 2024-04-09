/* readline is a js object
step 1 : include the readline module 
step 2 : create an instance of readline.Interface
step 3 : prompted the user for their name 
step 4 : Diplay a greeting 
step 5 : close the readline Interface
*/

// const readline = require('readline') // module included
// const rl = readline.Interface({ //instance of Interface
//     input: process.stdin,
//     output: process.stdout 
// })
// rl.question('What is your name?', (name) => { //Display a greeting 
//     console.log(`hello, ${name}!`)
//     rl.close() // close Interface
// }
// )

//!SECTION function to generate a random number between min and max (inclusive)
const readline = require('readline')
const rl = readline.Interface({ //instance of Interface
    input: process.stdin,
    output: process.stdout 
})
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min +1)) + min
}
//the sercrit number to guess between 1 and 100
const secretNumber = getRandomInt(1, 100)
//counter for number of attempts 
let attempts = 0;
console.log('guess a number!\'s between 1 - 100 you have unlimited attempts.')
// create a function to start the game
function guessNumber() {
    rl.question('Enter your quess', (anwser) => {
        attempts += 1 // increment the number of attempts 
        const guess = parseInt(anwser, 10) //converting the input string to number
        // check if gues is correct, too high or too low
        if (guess === secretNumber) {
            console.log(`Correct! the number was ${secretNumber}. It took you ${attempts} attempts.`)
            rl.close() 
        } else if (guess < secretNumber) {
            console.log('too low')
            guessNumber()   
        } else if (guess > secretNumber) {
            console.log('too high')
            guessNumber()
        } else {
            console.log('please enter a number between 1 - 100')
        }
    })
}
guessNumber()


// rl.question('Pick a random number?', (num) => { //Display a greeting 
//         console.log(`hello, ${num}!`)
//         rl.close() // close Interface
//     }
//     )