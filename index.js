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
      this.head = node;

      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  prepend(node) {
    node.next = this.head;
    this.head = node;
  }

  size() {
    let i = 0;
    let current = this.head;
    if (current.next == null) {
      console.log(i);
      return i;
    }
    while (current.next != null) {
      i += 1;
      console.log(current.content);
      current = current.next;
    }
    i += 1;
    console.log(i);

    return i;
  }
  first() {
    console.log(this.head);
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    console.log(current.content);
    return current.content;
  }
  at(index) {
    if (this.size() < index) {
      console.log("to loarge");
      return;
    }
    let current = this.head;
    while (index > 1) {
      current = current.next;
      index -= 1;
    }
    console.log(current.content);
    return current.content;
  }
  pop() {
    let current = this.head;
    let length = this.size();
    if (length == 1) {
      current = null;
      return;
    }
    if (length == 2) {
      current.next = null;
      return;
    }
    while (length > 2) {
      length -= 1;
      current = current.next;
    }
    current.next = null;
    console.log(this.head);
    return this.head;
  }
  contains(value) {
    let current = this.head;
    while (true) {
      if (current.content == value) {
        console.log(true);
        return true;
      }
      if (current.next == null) {
        console.log(false);
        return false;
      }
      current = current.next;
    }
  }
  toString() {
    let string = "";
    let length = this.size();
    let current = this.head;
    while (length > 0) {
      console.log(current.content);
      string += `(${current.content})-> `;
      current = current.next;
      length -= 1;
    }
    string += "null";
    console.log(string);
    return string;
  }
  insertAt(value, index) {
    let current = this.head;
    let previous = current;
    let length = this.size();
    if (index > length) {
      console.log("to large index");
      return;
    }
    if (index == 0) {
      this.prepend(value);
      console.log(this.head);
      return;
    }
    while (index > 0) {
      previous = current;
      current = current.next;
      index -= 1;
    }
    value.next = current;
    previous.next = value;

    console.log(this.head);
  }
  removeAt(index) {
    let current = this.head;
    let previous = current;
    let length = this.size();

    if (length < index) {
      console.log("too long");
      return;
    }
    while (index > 0) {
      previous = current;
      current = current.next;
      index -= 1;
    }
    previous.next = current.next;
    console.log(this.head);
    return;
  }
}

let dog = new node("dog", null);
let cat = new node("cat", null);
let human = new node("human", null);
let mylinkedList = new LinkedList(null);
let fish = new node("fish", null);
mylinkedList.append(dog);

mylinkedList.append(cat);
// mylinkedList.append(human);
// console.log(mylinkedList.head);

mylinkedList.prepend(fish);
mylinkedList.size();
mylinkedList.first();
mylinkedList.tail();
mylinkedList.at(4);
// mylinkedList.pop();
mylinkedList.contains("human");
mylinkedList.toString();
mylinkedList.insertAt(human, 3);
mylinkedList.removeAt(2);
