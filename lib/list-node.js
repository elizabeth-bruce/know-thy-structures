'use strict';

const ListNode = {
    create(data) {
        const proto = {
            addNext(node, linkedList) {
                this.next = node;
                node.previous = this;
            },
            unlink(linkedList) {
                let previous = this.previous,
                    next = this.next;

                if (previous) {
                    previous.next = null;
                }
                if (next) {
                    next.previous = null;
                }

                this.next = null;
                this.previous = null;
            }
        };
        return Object.create(proto, {
            data : { writable: false, configurable: false, enumerable: true, value: data },
            next: { writable: true, configurable: true, enumerable: true, value: null },
            previous: { writable: true, configurable: true, enumerable: true, value: null }
        });
    }
};

module.exports = ListNode;
