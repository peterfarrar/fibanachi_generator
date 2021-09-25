module.exports = function* fibonacciGenerator (max: number = 100): IterableIterator<number | void> {
  const arr: number[] = [0, 1]
  if (max < 1) throw new Error('fibonacciGenerator requires a max value of more than 0')

  for(let i: number = 2; i < (max + 2); i++) {
    arr[i] = (arr[i-1] + arr[i-2])
    yield arr[i-2]
  }
}

