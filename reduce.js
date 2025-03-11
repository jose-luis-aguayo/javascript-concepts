//takes two values as arguments, first a callback function, second optional initial value

let a = [1, 2, 7, 4, 5, 6]

const initialValue = 1 //if specified, will take this as a first value, if not, it will take the first element of the array


//will print the sum of all elements in array
const result = a.reduce((previousValue, currentValue) => {
    console.log(`previous value: ${previousValue} current value : ${currentValue}`)
    return previousValue + currentValue //is returning what was accumulated plus the new value of iteration
})


//basically, the returning value in arrow function, is the parameter taken for the next execution
//will print value 1 six times.
const reduce2 = a.reduce((accumulator, currentValue) => {
    console.log(`current value: ${accumulator}`)
    return 1
}, initialValue)


const strings = ['a', 'b', 'c', 'd']
const reduce3 = strings.reduce((accumulator, currentArrayValue) => {
    return accumulator + currentArrayValue
})


//excercise: find the highest number in array
const number = a.reduce((biggestNumber, currentValue) => {
    if(currentValue > biggestNumber) return currentValue
    return biggestNumber
})

console.log(number)