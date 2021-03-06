import test from 'ava'

const app = require('../src/app')

test('Bruteforce until return true', t => {

  app('abc', (result) => {
    if (result === 'abbac') {
      t.pass()
      return true
    }
  })
})

test('Bruteforce maxLenght: 3', t => {
  app('abc', (result) => {
    if (result === 'ac') {
      t.pass()
      return true
    }
  }, 3)
  t.pass()
})

test('Bruteforce maxLenght: 3 but expected string is longer', t => {
  app('abc', (result) => {
    if (result === 'abbac') {
      t.fail()
      return true
    }
  }, 3)
  t.pass()
})
