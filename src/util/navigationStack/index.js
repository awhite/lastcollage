class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.init();
  }

  init() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  add(val) {
    const node = new Node(val);
    this.length++;
    if (!this.back) {
      this.front = node;
      this.back = node;
      return;
    }

    this.back.next = node;
    node.prev = this.back;

    this.back = node;
  }

  remove(i) {
    let node = this.front;
    if (i > this.length) return null;
    if (i === this.length) return this.removeEnd();
    if (i === 0) return this.removeFront();

    this.length--;
    while (i > 0) {
      node = node.next;
    };
    node.prev.next = node.next;
    node.next.prev = node.prev;

    return node.val;
  }

  removeFront() {
    if (this.length === 0) return null;
    this.length--;
    let node = this.front;
    this.front = node.next;
    this.front.prev = null;
    return node.val;
  }

  removeEnd() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      const { val } = this.back
      this.init();
      return val;
    }
    this.length--;
    let node = this.back;
    this.back = node.prev;
    this.back.next = null;
    return node.val;
  }
}

class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  push(val) {
    this.storage.add(val);
  }

  pop() {
    return this.storage.removeEnd();
  }

  top() {
    return this.size() > 0 ? this.storage.back.val : null;
  }

  size() {
    return this.storage.length;
  }
};

export default Stack;
