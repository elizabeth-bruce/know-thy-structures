'use strict';

const util = require('util');
const HeapNode = require('./heap-node');

const MinHeap = {
    create() {
        const parent = function(idx) {
            if (idx === 0) {
                return 0;
            }
            return Math.floor((idx - 1)/ 2.0);
        };
        const left = function(idx) {
            return idx * 2 + 1;
        };
        const right = function(idx) {
            return idx * 2 + 2;
        };
        const proto = {
            size() {
                return this.heap.length;
            },
            toString() {
                return `MinHeap { heap: ${util.inspect(this.heap)} }`;
            },
            inspect() {
                return this.toString();
            },
            toArray() {
                return this.heap;
            },
            insert(el) {
                if (!Number.isInteger(el) || el < 1) {
                    throw new Error('Element to insert must be a positive integer');
                }

                let idx = this.heap.push(el) - 1,
                    parentIdx = parent(idx);

                while (this.heap[parentIdx] > this.heap[idx]) {
                    let swap = this.heap[parentIdx];
                    this.heap[parentIdx] = this.heap[idx];
                    this.heap[idx] = swap;

                    idx = parentIdx;
                    parentIdx = parent(idx);
                }
            },
            extractMinimum() {
                if (this.heap.length === 0) {
                    return null;
                }

                let minimum = this.heap[0];

                this.heap[0] = this.heap[this.heap.length - 1];
                this.heap.pop();

                let idx = 0,
                    idxToCompare = this.heap[left(idx)] <= this.heap[right(idx)] ? left(idx) : right(idx);

                while (this.heap[idx] > this.heap[idxToCompare]) {
                    let swap = this.heap[idx];
                    this.heap[idx] = this.heap[idxToCompare];
                    this.heap[idxToCompare] = swap;

                    idx = idxToCompare;
                    idxToCompare = this.heap[left(idx)] < this.heap[right(idx)] ? left(idx) : right(idx);
                }

                return minimum;
            }
        };
        return Object.create(proto, {
            heap: { writable: true, configurable: true, enumerable: true, value: [] }
        });
    }
};

module.exports = MinHeap;
