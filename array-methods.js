/** following is the list of array methods 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/**
 * 
    concat() 
        let newArr = numbers.concat([11,12,13])

    copyWithin()

    every() tests whether all elements pass the given condition
        console.log(numbers.every(number => number > 1))

    filter()
        console.log(numbers.filter(number => number > 5))

    flat() aplana un arreglo que pudiera tener el siguiente formato [1, 2, [3, 4]] a [1, 2, 3, 4]
        console.log([1, 2, [3, 4]].flat())
        output: [1, 2, 3, 4]

    flatMap()
    forEach() executes a given function for each element in array
        numbers.forEach(number => console.log(number * 2))

    indexOf()
        console.log(numbers.indexOf(2, 4)) //Second parameter(optional) is the starting index

    lastIndexOf()


    map() //Provides new array. can be used to copy an array by value
        console.log(numbers.map(number => number))

    reduce()

    reduceRight()
    reverse()
    slice()
    some()
    sort()
    splice()

 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let strings = ['a', 'e', 'i', 'o', 'u']



