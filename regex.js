// g means global, will search in all text. If not present, will return only the first occurence
// i case insensitive
// m multiline
// s singleline
// u unicode
// y sticky
// order does not matter

let text = 'hello this is my text HELLO'
let time = '12:12:00AM'

let result = time.match(/[0-9]+\w/g)

console.log(result)