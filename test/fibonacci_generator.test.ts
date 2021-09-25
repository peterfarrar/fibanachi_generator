const { expect } = require('chai')
const fibonacciGenerator = require('../src/fibonacci_generator')

describe('fibonacci_generator.ts', () => {
  context('fibonacci sequence values', () => {
    let fibanache: Generator = fibonacciGenerator(100)

    it('returns 0 the first time it is called', () => {
      const zero: number | void = fibanache.next().value
      expect(zero).to.equal(0)
    })

    it('returns 1 the second and third time it is called', () => {
      const one: number | void = fibanache.next().value
      expect(one).to.equal(1)
      const anotherOne: number | void = fibanache.next().value
      expect(anotherOne).to.equal(1)
    })

    it('returns 2 the third time it is called', () => {
      const two: number | void = fibanache.next().value
      expect(two).to.equal(2)
    })

    it('returns 5 the fifth time it is called', () => {
      fibanache.next().value
      const five: number | void = fibanache.next().value
      expect(five).to.equal(5)
    })

    it('returns 21 the eight time it is called', () => {
      fibanache.next().value
      fibanache.next().value
      const twentyone: number | void = fibanache.next().value
      expect(twentyone).to.equal(21)
    })

    it('returns 218922995834555200000 the one hundredth time it is called', () => {
      for (let i = 0; i < 90; i++) { // 8 + 91 = 99
        fibanache.next().value
      }
      const hudredthTime: number | void = fibanache.next().value
      expect(hudredthTime).to.equal(218922995834555200000)
    })

    it('returns undefined the one hundred and first time it is called', () => {
      const oneOhOne: number | void = fibanache.next().value
      expect(oneOhOne).to.be.undefined
    })
  })
})