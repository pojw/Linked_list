class node {
  constructor(content, next) {
    this.content = content;
    this.next = next;
  }
}

class LinkedList {
  constructor(pastNode) {
    this.pastNode = pastNode;

    //it needs a memeory of two, one to know the previess value, and one to store the next value
  }
  append(node) {
    if (this.pastNode == null) {
      console.log("first");
      this.pastNode = node;
      return;
    } else {
      this.pastNode.next = node.content;
      console.log(this.pastNode);
      console.log(node.content);
    }
  }
}
let dog = new node("dog", null);
let cat = new node("cat", null);
let human = new node("human", null);
let mylinkedList = new LinkedList(null, null);

mylinkedList.append(dog);

mylinkedList.append(cat);
// mylinkedList.append(human);
console.log(mylinkedList);
