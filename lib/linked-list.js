'use strict';

const _ = require('lodash');
const ListNode = require('./list-node');

const LinkedList = {
    create(data) {
        const proto = {
            toString() {
                return `LinkedList { head: ${util.inspect(this.head, { depth: 0 })} }`;
            },
            inspect() {
                return this.toString();
            },
            length() {
                let node = this.head,
                    currentLength = 0;

                if (node === null) { 
                    return 0;
                }

                do {
                    currentLength += 1;
                    node = node.next;
                } while (node !== null);

                return currentLength;
            },
            push(el) {
                if (el === undefined) {
                    throw new Error('No element to add to list specified');
                }
                if (this.head === null) {
                     this.head = ListNode.create(el);
                }
                else {
                    let node = this.head;
                    while (node.next !== null) { 
                        node = node.next;
                    }
                    node.next = ListNode.create(el);
                }
                return this.length();
            },
            pop() {
                let node = this.head,
                    previous = null;

                if (node === null) {
                    return null;
                }
                if (node.next === null) {
                    let data = node.data;
                    this.head = null;
                    return data;
                }
                while (node.next !== null) {
                    previous = node;                    
                    node = node.next;
                }
                previous.next = null;
                return node.data; 
            },
            removeValue(el) {
                let node = this.head,
                    currentIndex = 0,
                    currentNode, previousNode, nextNode;

                if (el === undefined) {
                    throw new Error('No element to remove from list specified');
                }
                if (node === null) {
                    return -1;
                }
                else if (_.isEqual(node.data, el)) {
                    this.head = node.next;
                    return currentIndex;
                }
                while (node.next !== null) {
                    previousNode = node;
                    currentNode = previousNode.next;
                    nextNode = currentNode.next;

                    if (_.isEqual(currentNode.data, el)) {
                        previousNode.next = nextNode;
                        return currentIndex + 1;
                    }
                    currentIndex += 1;
                    node = node.next;
                }
                if (_.isEqual(node.data, el)) {
                    previousNode.next = null;
                    return currentIndex + 1;
                }
                return -1;
            },
            removeIndex(idx) {
               let node = this.head,
                   currentIndex = 0;

               if (!Number.isInteger(idx) || idx < 0) {
                   throw Error('Index provided must be a positive or zero integer');
               }

               if (currentIndex === idx) {
                   this.head = node.next;
                   return currentIndex;
               }
               while (currentIndex < idx - 1) {
                   if (node === null) {
                       return -1;
                   }
                   node = node.next;
                   currentIndex += 1;
               }
               if (node.next === null) {
                   return -1;
               }

               node.next = node.next.next;
               return currentIndex + 1;               
            },
            at(idx) {
                let node = this.head, 
                    currentIndex = 0;

               if (!Number.isInteger(idx) || idx < 0) {
                   throw Error('Index provided must be a positive or zero integer');
               }

                while (currentIndex < idx) {
                    if (node === null) {
                       return null;
                    }
                    node = node.next;
                    currentIndex += 1;
                }
                return node.data;
            }
        };

        if (data === undefined) {
            return Object.create(proto, {
                head: { writable: true, configurable: true, enumerable: true, value: null }
            });
        } 

        return Object.create(proto, {
            head: { writable: true, configurable: true, enumerable: true, value: ListNode.create(data) }
        });
    }
};

module.exports = LinkedList;
