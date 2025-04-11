


    /**
     * 
     * 
    -----   --------
    8       Q = 8
    1 abc   ops[0] = '1 abc'
    3 3     ops[1] = '3 3'
    2 3     ...
    1 xy
    3 2
    4 
    4 
    3 1

    Sample output 
    c
    y
    a
     */
    function processData(input){
            //Enter your code here
    //1 W append string to the end
    //2 k delete the last k characters
    //3 print the kth character of S
    //4 undo Undo the last operation of type 1 or 2.
    
    let instructions = input.split('\n');
    let nOfInstructions = Number(instructions.shift());
    let userText =  '';
    let operationsHistory = []; //last in first out 
    let lastAppendedText = '';
    
    for(let i = 0; i < instructions.length; i ++){
        
        let typeOfOperation = Number(instructions[i].at(0)); // will return a number
        let text = instructions[i].slice(2);
        
        if(typeOfOperation == 1 || typeOfOperation == 2) {
            operationsHistory.push(instructions[i]);    
        }                   
        
        
        switch(typeOfOperation){
            case 1:
                userText += text;
                //lastAppendedText = text;
            break;
            case 2: //example (2 3) remove last 3 chars
                userText = userText.slice(0, userText.length - text)
            break;
            case 3:
                console.log(userText.at(text - 1));
            break;
            case 4:
                let lastOperation = operationsHistory.pop();
                
                if(+lastOperation.at(0) == 1) {
                    
                    userText = userText = userText.slice(0, userText.length - lastOperation.slice(2))
                    
                } else if (+lastOperation.at(0) == 2) {
                    
                    userText += operationsHistory.pop().slice(2);
                    //console.log(`the text to append is ${operationsHistory.pop().slice(2)}`)
                    
                }
            break;
        }
        
        
        
        
    }

    }