

class Node {

    constructor(data,next=null) {
        this.data = data,
        this.next = next
        
    }
    
}
class LinkList{
    constructor(){
       this.head = null;
    }

    append(data){
        const node = new Node(data,this.head);
        this.head = node;
   }

   size(){
      let temp = this.head;

     let count = 0;
      
      while(temp != null){
        
      let current = temp;
       temp = current.next;
       count++;
      }
      return count;
   }

   print(){
       l
   }

    }







const linklist = new LinkList();

linklist.append(1);
linklist.append(2);
linklist.append(3);
linklist.append(4);

console.log(linklist.size())





