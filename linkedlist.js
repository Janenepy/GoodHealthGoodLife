var LinkedListNode = require('./linknode.js');
var Comparator = require('./comparator.js');

class LinkedList {
  
  constructor(comparatorFunction) {
  
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  getHead(){
    return this.head;
  }

  getTail(){
    return this.tail;
  }
  
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  //TBD
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      
      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // TBD
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is differ
    // from the head to be a new head.
    /*while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }*/

    let currentNode = null;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      /*while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }*/
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

 
  find(value = undefined ) {
    if (this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
    
      // If value is specified then try to compare by value..
      /*if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

  
      currentNode = currentNode.next;*/
    }

    return null;
  }

 
 // TBD
  deleteHead() {
 
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.tail = null;
    } 

    return deletedHead;
  }

  //TBD
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  
  toLinkString() {
    var adata = this.toArray();
    return adata.map(node => node.toString()).toString();
  }


  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
      
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

module.exports  = LinkedList;