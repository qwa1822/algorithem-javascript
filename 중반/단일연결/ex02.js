// piace of data- value
// reference to next node -next

class Node{
  constructor(node){
    this.val=node;;
    this.next=null;
  }
}

let first=new Node("Hi");
first.next=new Node("there")
first.next=new Node("three")