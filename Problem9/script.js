class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head, k) {

    let n = 0;
    let current = head;
    while (current) {
        n++;
        current = current.next;
    }
    

    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    head = prev;
    

    prev = null;
    for (let i = 0; i < n - k; i++) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    if (prev) {
        prev.next = curr;
    }
    
    return head;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const k = 2; 
const newHead = reverseLinkedList(node1, k);

let current = newHead;
while (current) {
    console.log(current.value);
    current = current.next;
}
