/**
 
The starting point of the workshop application.
@author Gustav Larsson <gl222pp@student.lnu.se>
@author Josef Matyasek <jm224ae@student.lnu.se>
@version 1.0.0
*/

// Proces to put numbers when starting application.
const first = parseInt(process.argv[2])
const second = parseInt(process.argv[3])

if (Number.isInteger(first) && Number.isInteger(second))
    {const answer = commonDivider(first, second)
        console.log(answer)
    } else {
        console.log('Input must be a integer!')
    }

/**
 
Prints the largest common divider between two numbers.
@param {number} first - The first number.
@param {number} second - The second number.
*/
function commonDivider (first, second) {
    // Initialization common dividet with 1.
    let largestDivider = 1

    // Loop true all divider.
    for (i = 1; i <= first; i++) {
      for (j = 1; j <= second; j++) {
        // Just integer divider.
        if (first % i === 0 && second % j === 0) {
            // If divider is same value and greater then cd update den.
          if (i === j && i > largestDivider) {
            largestDivider = i
          }
        }
      }
    }
    return largestDivider
  }