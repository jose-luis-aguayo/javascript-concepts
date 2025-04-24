class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            
        } else {
            let prev = this.head;

            while(prev.next){
                prev = prev.next;
            }
            
            prev.next = node;
        }

        this.size++;
    }

    reverseList(){
        let reversedList = new LinkedList();
        
        let current = this.head;
        

        while(current){
            let node = new Node(current.value);

            if(!reversedList.head) {
                reversedList.head = node
            } else {
                
                node.next = reversedList.head;
                reversedList.head = node
            }

            current = current.next
        }

        console.log(reversedList.head)
    }

    reverseV2(){
        // null <- 1  2->3->4

        let current = this.head;
        let prev = null;
        

        while(current){
            let next = current.next;    //temporary var to store the next value (2)
            current.next = prev;        //Disconnect current (1->2) connection to next and point to prev (null<-1)
            prev = current;             //move from null to (1)
            current = next;             //and move to the next position
        }
        this.head = prev

    }

    
}

let list = new LinkedList()
list.append(1);
list.append(2);
list.append(3);

console.log(list);
list.reverseV2();
console.log(list);


