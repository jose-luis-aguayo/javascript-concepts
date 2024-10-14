//basic destructuring

let a = [1,2,3];

let [one, two, three] = a;

console.log(one);

//skipping a value destructuring

let [o, ,t] = a;

console.log(o, t);

//swap array values

[a[0], a[1]] = [a[1], a[0]];

console.log(a);
