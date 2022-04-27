class Node {
    constructor(data){
    this.data = data
    this.next = null;
    }


}


class LinkList {
    constructor(){
        this.head = null;
    } 

    atStart(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    print(){
        let temp =  this.head;
        let str = ''
        while(temp != null){
          str += temp.data + " ";
          temp = temp.next
        }
        console.log(str);
    }


}


const linklist = new LinkList();
linklist.atStart(2);
linklist.atStart(3);
linklist.atStart(4);
linklist.atStart(5);

linklist.print()





