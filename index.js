const snake = require('to-snake-case-g')

const toConstantCase = string => snake(string).toUpperCase()

module.exports = toConstantCase
