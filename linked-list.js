class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    
    push(val){
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
           this.tail.next = newNode
           this.tail = newNode 
         }
         this.length++
         //return this ?? not necessary
       }

    printList(){
        let current = this.head;
        let result = '';

        while(current){
            result += current.val + '->';
            current = current.next;
        }

        console.log(result)
    }
}


let myList = new SinglyLinkedList();

myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
console.log(myList)

//number of times: 1, 2, 3, 4, 5