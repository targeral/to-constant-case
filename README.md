# to-constant-case
Convert a string to a constant case.Study from ianstormtaylor/to-constant-case

## Installation

```
$ npm install to-constant-case-g
```


## Example

```js
var toConstantCase = require('to-constant-case')

toConstantCase('camelCase')   // "CAMEL_CASE"
toConstantCase('snake_case')  // "SNAKE_CASE"
toConstantCase('dot.case')    // "DOT_CASE"
toConstantCase('weird[case')  // "WEIRD_CASE"
```


## API

### toConstantCase(string)
  
Returns the `string` converted to constant case.
