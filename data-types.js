

/**
 * Primitive types immutable: you cannot alter the value only replace the value
 * undefined
 * null
 * boolean
 * number
 * string
 * symbol
 */

/**reference types
 * objects
 * arrays
 * functions
 */


/** testing inmmutability */

let name = 'jose'
let name2 = name //creates a shallow copy of name. 

name2 = 'luis' //changes value in name2 but name remains the same

console.log(name)
console.log(name2)


/** reference types are mutable, objects copied this way shre the same memory allocation
 * so if I change a property in any copy, it will change in everything 
 * If you whan to create a shallow copy use spread operator like this
 * 
 * let person2 = {
 *      ...person
 * }
 */

let person = {
    name: 'jose',
    age: 31
}

let person2 = person 

person2.name = 'luis'

console.log(person)
console.log(person2)