/* Return the factorial of the provided integer
for example: 5! = 1 * 2 * 3 * 4 * 5 = 120

*/

function factorialize(num) {
  let result = 1
  for (let i = 1;  i <= num;  i++) {
    result = result * i
  }
  return result
}


module.exports = factorialize;
