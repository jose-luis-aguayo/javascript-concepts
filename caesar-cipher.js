function caesarCipher(s, k) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //length 26
    let capitalCase = new Map();
    let lowerCase = new Map();
    let alphabetCipher = new Map();
    let cipheredString = [];
    
    for(let i = 0; i < alphabet.length; i++){ //create the map 
        let cipheredIndex = i + k;
        
        if(cipheredIndex >= 26){
            cipheredIndex = cipheredIndex % 26;
        }
        
        alphabetCipher.set(alphabet[i].toUpperCase(), alphabet[cipheredIndex].toUpperCase());
        alphabetCipher.set(alphabet[i], alphabet[cipheredIndex]);
    }
    
    for(let j = 0; j < s.length; j ++) {
        if(alphabetCipher.get(s[j]) != undefined){
           cipheredString.push(alphabetCipher.get(s[j]));  
        } else {
            cipheredString.push(s[j]);
        }
         
    }
    
    return cipheredString.join('')
}