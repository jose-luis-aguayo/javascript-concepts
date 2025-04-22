class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode;
            } else {
                return this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null){
                root.right = newNode;
            } else {
                return insertNode(root.right, newNode);
            }
        }
    }
}

let bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(2);

console.log(bst.root.left)