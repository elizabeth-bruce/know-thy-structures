'use strict';

const MinHeap = require('../../lib/index').MinHeap;

describe('.create', function() {
    it('creates an empty min-heap', function() {
        let heap = MinHeap.create();
        expect(heap.heap).toEqual([]);
    });
});

describe('#insert', function() {
    describe('an invalid value is provided', function() {
        it('throws an error', function() {
            let heap = MinHeap.create();
            expect(() => heap.insert('a')).toThrow(new Error('Element to insert must be a positive integer'));
        });
    });
    describe('a valid value is provided', function() {
        it('inserts a value correctly into the heap', function() {
            let heap = MinHeap.create();
            heap.insert(5);
            heap.insert(3);
            heap.insert(2);
            heap.insert(10);
            heap.insert(1);

            expect(heap.heap).toEqual([1, 2, 3, 10, 5]);
        });
    });
});

describe('#extractMinimum', function() {
    it('returns the minimum value of the heap', function() {
            let heap = MinHeap.create();
            heap.insert(5);
            heap.insert(3);
            heap.insert(2);
            heap.insert(10);
            heap.insert(1);

            expect(heap.extractMinimum()).toEqual(1);
    });
    it('rebalances the tree correctly', function() {
            let heap = MinHeap.create();
            heap.insert(5);
            heap.insert(3);
            heap.insert(2);
            heap.insert(10);
            heap.insert(1);

            heap.extractMinimum();

            expect(heap.heap).toEqual([2, 5, 3, 10]);
    });
    describe('the heap is empty', function() {
        it('returns null', function() {
            let heap = MinHeap.create();
            expect(heap.extractMinimum()).toBeNull();
        });
    });
});

describe('#size', function() {
    it('returns the size of the heap', function() {
        let heap = MinHeap.create();
        heap.insert(1);
        heap.insert(2);
        heap.insert(3);

        expect(heap.size()).toEqual(3);

        let emptyHeap = MinHeap.create();

        expect(emptyHeap.size()).toEqual(0);
    });
});

describe('#toArray', function() {
    it('returns the array representation of the heap', function() {
        let heap = MinHeap.create();

        heap.heap = ['foo', 'bar', 'baz'];

        expect(heap.toArray()).toEqual(['foo', 'bar', 'baz']);
    });
});
