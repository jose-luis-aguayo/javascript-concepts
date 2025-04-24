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
            return this.insertNode(this.root, newNode);
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
                return this.insertNode(root.right, newNode);
            }
        }
    }

    //depth first search: starts in the root node and explores as far as possible 
    //before backtracking 

    //Depending on the order in which we do this there can be three types:
    //1 preorder
    //2 Inorder
    //3 PostOrder

    preOrder(root){
        if(root){
            console.log(`${root.value}`);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
        
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(`${root.value}`)
            this.inOrder(root.right);
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value)
        }
    }

    height(root) {
        if (root === null) {
            return -1;
        }
    
        // compute the height of left and right subtrees
        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);

        console.log(`${Math.max(lHeight, rHeight)}`)
    
        return Math.max(lHeight, rHeight) + 1;
    }
}

let root = new Node();

let bst = new BST();


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(8);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(7);
root.right.right = new Node(6);

//console.log(bst.preOrder(root))
// console.log('---------')
// console.log(bst.inOrder(root))
// console.log('---------')
// console.log(bst.postOrder(root))

console.log(bst.height(root))