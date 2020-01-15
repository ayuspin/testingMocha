
const add = (x, y) => +x + +y
const subtruct = (x, y) => +x - +y

const inputValidate = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false
  }
  return true
}

module.exports = { add, subtruct, inputValidate }
