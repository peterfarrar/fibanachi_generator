
const fibonacci: Generator = require('./fibonacci_generator')(100)

for(let i: number = 0; i < 100; i++) {
  console.log(i, fibonacci.next().value)
}