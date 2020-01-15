const operations = require('./operations.js')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`)

rl.question('Enter the first number: ', x => {
  rl.question('Enter the second number: ', y => {
    rl.question(
      `
    Please select from the following options:

    [1] Addition (+)
    [2] Subtraction (-)
    [3] Multiplication (*)
    [4] Division (/)

    Enter your choice: `,
      choice => {
        if (!operations.inputValidate(x, y)) {
          console.log(`-- ${operations.inputValidate(x, y)} -- ${typeof(x)}`)
          console.log('Numbers have not been recognized, exiting ...')
        } else {
          switch (choice) {
            case '1':
              console.log(`${x} + ${y} = ${operations.add(x, y)}`)
              break;
            default:
              console.log('Please select from operation 1-4')
          }
        }
        rl.close()
      }
    )
  })
})
