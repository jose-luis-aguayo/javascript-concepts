function processData(input) {
    //Enter your code here
    //enqueue add to the end push()
    //dequeue remove element from the front shift()
    //at(0) print the beginning
    // 1 enqueue
    // 2 dequeue
    // 3 print the front element
    
    
    let inputFormatted = input.split('\n');
    
    let nOfQueries = Number(inputFormatted[0]);
    
    let queue = [];
    
    for(let i = 1; i < inputFormatted.length; i ++){
        let typeOfQuery = Number(inputFormatted[i].at(0))
        
        let number = Number(inputFormatted[i].slice(2))
        //console.log(number)
        
        if(typeOfQuery == 1){
            queue.push(number)
        } else if (typeOfQuery == 2) {
            queue.shift();
        } else if ( typeOfQuery == 3){
            console.log(queue.at(0))
        } 
    }
} 
