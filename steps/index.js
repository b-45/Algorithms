// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stairSteps(n) {
  for (row = 0; row < n; row++) {
    let steps = ''

    for(column = 0; column < n; column++) {
      if (column <= row) {
        steps += '#'
      }
      else {
        steps += ' '
      }

    }
    console.log(steps);
  }
}

module.exports = stairSteps;
