const LinkedListNode = class {

    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function append(head){
 

}

// Complete the function below

// function insertNodeAtHead(head, data) {
//      let newNode = new LinkedListNode(data);
//     newNode.next = head;
//     return newNode

// }


let node1 = new LinkedListNode(3);
let node2 = new LinkedListNode(2);
node2.next = node1;
console.log(node2);