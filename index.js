class node {
  constructor(content, next) {
    this.content = content;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;

    //it needs a memeory of two, one to know the previess value, and one to store the next value
  }
  append(node) {
    if (this.head == null) {
      console.log("first");
      this.head = node;

      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
      console.log("1");
    }
    current.next = node;
  }
}

let dog = new node("dog", null);
let cat = new node("cat", null);
let human = new node("human", null);
let mylinkedList = new LinkedList(null);
let fish = new node("fish", null);
mylinkedList.append(dog);

mylinkedList.append(cat);
mylinkedList.append(human);
mylinkedList.append(fish);
console.log(mylinkedList.head);
