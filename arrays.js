var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
} 

function destructivelyAddElementToBeginningOfArray(array, element) { 
  var array = [element, ...array[1]]
}