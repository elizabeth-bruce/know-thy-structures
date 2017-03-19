'use strict';

const _ = require('lodash');
const util = require('util');
const ListNode = require('./list-node');

const LinkedList = {
    create(data) {
        const addNext = function(list, el, next) {
            el.addNext(next);

            if (list.tail === el) {
                list.tail = el.next;
            }
        };

        const unlink = function(list, el) {
            if (list.head === el) {
                list.head = el.next;
            }

            if (list.tail === el) {
                list.tail = el.previous;
            }
            el.unlink();
        };

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
                     this.tail = this.head;
                }
                else {
                    addNext(this, this.tail, ListNode.create(el));
                }
                return this.length();
            },
            pop() {
                if (this.head === null) {
                    return null;
                }

                let elementToPop = this.tail;

                unlink(this, elementToPop);

                return elementToPop.data;
            },
            removeValue(el) {
                let node = this.head,
                    currentIndex = 0;

                if (el === undefined) {
                    throw new Error('No element to remove from list specified');
                }
                if (node === null) {
                    return -1;
                }
                while (node.next !== null) {
                    if (_.isEqual(node.data, el)) {
                        let previousNode = node.previous,
                            nextNode = node.next;

                        unlink(this, node);
                        if (previousNode) {
                            addNext(this, previousNode, nextNode);
                        }
                        return currentIndex;
                    }
                    currentIndex++;
                    node = node.next;
                }
                if (_.isEqual(node.data, el)) {
                    unlink(this, node);
                    return currentIndex;
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
               while (currentIndex < idx) {
                   if (node === null) {
                       return -1;
                   }
                   node = node.next;
                   currentIndex++;
               }
               let previousNode = node.previous,
                   nextNode = node.next;

               unlink(this, node);
               addNext(this, previousNode, nextNode);
               return currentIndex + 1;               
            },
            indexOf(el) {
                let node = this.head,
                    currentIndex = 0;

                while (node !== null) {
                    if (_.isEqual(node.data, el)) {
                        return currentIndex;
                    }
                    currentIndex++;
                    node = node.next;
                }
                return -1;
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
                head: { writable: true, configurable: true, enumerable: true, value: null },
                tail: { writable: true, configurable: true, enumerable: true, value: null }
            });
        } 

        let head = ListNode.create(data);

        return Object.create(proto, {
            head: { writable: true, configurable: true, enumerable: true, value: head },
            tail: { writable: true, configurable: true, enumerable: true, value: head }
        });
    },
    fromArray(array) {
        let list = LinkedList.create();
        array.forEach((el) => list.push(el));

        return list;
    }
};

module.exports = LinkedList;
