let a = []
    let b = []

    
    while(head1 != null){
        a.push(head1.data)
        head1 = head1.next
    }
    
    while(head2 != null){
        b.push(head2.data)
        head2 = head2.next
    }
    
    let newOne = [a, b].flat();
    
    newOne.sort((a, b) => a - b);
    
    let head3 = new SinglyLinkedList();
    
    for(let i = 0; i < newOne.length; i ++){
        head3.insertNode(newOne[i])
    }
    
    return head3.head