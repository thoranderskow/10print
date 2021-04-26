/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns
const RESET = '\x1b[0m'
const colors = ['\x1b[97m','\x1b[31m', '\x1b[32m', '\x1b[33m' ,'\x1b[34m' ,'\x1b[35m' ,'\x1b[36m', '\x1b[37m']

function draw () {
  setTimeout(draw, 1000)
  let output = '\x1b[44m\x1b[106m'
  let cflag = 0
  let rflag = 0
  for (let i = 0; i < w; i++) {
    if (Math.random() >= 0.3 && rflag) {
      for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
        output += ' '
      }
    }
    if (Math.random() >= 0.9 && cflag) {
      output += '      '
    }
    if (cflag) {
      output += colors[7] + 'ᚙ'
      continue
    }
    if (rflag) {
      output += colors[4] + '|'
      continue
    }
    if (Math.random() > 0.3) {
      output += colors[7] + 'ᚙ'
      cflag = 1
    } else {
      output += colors[4] + '|' //'ƾ'
      rflag = 1
    }
  }
  console.log(output)
}

draw()
