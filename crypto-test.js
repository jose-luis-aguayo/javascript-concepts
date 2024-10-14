const crypto = require('crypto')
const fs = require('fs')
const algorithm = 'aes-256-ctr';
let key = 'my-key';
key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);


// const encrypt = (buffer) => {
//     // create initialization vector
//     const iv = crypto.randomBytes(16);
//     // create a new cipher using the algorithm, key and iv
//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     // create the new (encrypted) buffer
//     const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
//     return result;
// } 

function OpenFile (filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(`${data}`)
            return data
        }
    })
}

const encrypt = (plainText) => {

    let buffer = Buffer.from(plainText);

    // create initialization vector
    const iv = crypto.randomBytes(16);
    // create a new cipher using the algorithm, key and iv
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    // create the new (encrypted) buffer
    const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
    return result;
} 


const decrypt = (encrypted) => {
    // get the iv of the first 16 bytes
    const iv = encrypted.slice(0, 16);
    // get the rest
    encrypted = encrypted.slice(16);
    // create a decipher
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    // actually decrypt it
    const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return result;
}



//let encrypted = encrypt();
//console.log(encrypted);

//let decrypted = decrypt(encrypted);
//console.log(`decripted text: ${decrypted}`)

let text = OpenFile('./find.js')


console.log(`this is the text ${text}`)