class Node {
  constructor (data){
       this.data = data,
       this.next = null
  }
}


class Linklist {
    constructor (){
        this.head = null;
    }

    appendStart(data){

        const node = new Node(data);
         node.next = this.head;
        this.head = node;



    }
}



class LinkList {
    constructor(){
        this.head = null
    }

    appendStart(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node
    }
}

const linklist = new Linklist();
linklist.appendStart(3);
linklist.appendStart(4);
console.log(linklist)


const linklist1 = new Linklist()
linklist.appendStart(5)

