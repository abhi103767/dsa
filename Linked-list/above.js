

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

    let temp = this.head
    while(temp != null){
        let current = temp;
        console.log(current.data);
         temp = current.next;
        }
       
   }

   append(data){
       console.log(data);
       let temp = this.head;
       if(this.head === null){
           this.head = new Node(data);
       }

       else {
       while( temp.next != null){
            temp = temp.next;
       }
       console.log(temp.next);
      temp.next = new Node(data);
    }


    

    }
    lastIndexValue(){
        let temp = this.head;
        while( temp.next != null){
            temp = temp.next;
       }
console.log(temp.next)
       return temp.data;

    }

    insertAtIndex(data,index){

    }

   
       
   }
  







const linklist = new LinkList();
console.log(linklist)
linklist.append(2);
linklist.append(3);


// linklist.append(1);




console.log(linklist)





