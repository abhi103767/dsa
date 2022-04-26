class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

const obj1 = new Node(2)
// this.head = obj1
const obj2 = new Node(3)
obj2.next = obj1
// this.head = obj2

const obj3 = new Node(4)
obj3.next = obj2
 
console.log(obj3)