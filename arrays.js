var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newarray = array.unshift(element)
} 

function destructivelyAddElementToBeginningOfArray(array, element) { 
  var newarray = array.unshift(element) - array[0]
}