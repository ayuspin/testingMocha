const assert = require('assert')
const operations = require('./operations')

it('Should return a summ', () => {
  assert.equal(operations.add(2, 3), 5)
})

it('Should subtruct', () => {
  assert.equal(operations.subtruct(3, 1), 2)
})

it('Error if input is not a number', () => {
  assert.equal(operations.inputValidate('number',1), false)
  assert.equal(operations.inputValidate(1, 'number'), false)
  assert.equal(operations.inputValidate('number', 'number'), false)
  assert.equal(operations.inputValidate(1, 1), true)
})
