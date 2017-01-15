'use strict';

const LinkedList = require('../../lib/index').LinkedList;

describe('.create', function() {
    describe('an init value is provided', function() {
        it('creates a linked list with the provided init value as the first node', function() {
            const list = LinkedList.create('foo');
            expect(list.head).toEqual({ data: 'foo', next: null });
        });
    });
    describe('no init value is provided', function() {
        it('creates a linked list with a null value as the first node', function() {
            const list = LinkedList.create();
            expect(list.head).toBe(null);
        });
    });
});

describe('#length', function() {
    it('returns the length of the linked list', function() {
        let exampleList = LinkedList.create();
        exampleList.push('a');
        exampleList.push('b');

        const zeroLengthList = LinkedList.create();

        expect(zeroLengthList.length()).toEqual(0);
        expect(exampleList.length()).toEqual(2);
    });
});

describe('#push', function() {
    describe('no value is provided', function() {
        it('throws an error', function() {
            let list = LinkedList.create();
            expect(() => list.push()).toThrow(new Error('No element to add to list specified'));
        });
    });
    describe('a value is provided', function() {
        it('appends the provided value to the end of the list', function() {
            let list = LinkedList.create('foo');
            list.push('bar');

            expect(list.at(1)).toEqual('bar');
        });
        it('returns the new value of the list', function() {
            let list = LinkedList.create('foo');
            expect(list.push('bar')).toEqual(2);
        });
    });
});

describe('#pop', function() {
    it('removes and returns the last value of the list', function() {
        let list = LinkedList.create('foo');
        expect(list.pop()).toEqual('foo');
        expect(list.length()).toEqual(0);

        let anotherList = LinkedList.create('foo');
        anotherList.push('bar');
        anotherList.push('baz');
        
        expect(anotherList.pop()).toEqual('baz');
        expect(anotherList.length()).toEqual(2);

        let emptyList = LinkedList.create();

        expect(emptyList.pop()).toEqual(null);
        expect(emptyList.length()).toEqual(0);
    });
});

describe('#removeValue', function() {
    describe('no value is provided', function() {
        it('throws an error', function() {
            let list = LinkedList.create();
            expect(() => list.removeValue()).toThrow(new Error('No element to remove from list specified'));
        });
    });
    describe('a value is provided', function() {
        it('removes the first instance of the value from the list', function() {
            let list = LinkedList.create();
            list.push('a');
            list.push('b');
            list.push({ foo: 'bar' });
            
            list.removeValue({foo: 'bar' });

            expect(list.length()).toEqual(2);

            list.push('a');
            list.removeValue('a');

            expect(list.length()).toEqual(2);
            expect(list.at(0)).toEqual('b');
        });
        it('returns the index of the value it removed, or -1 if not found', function () {
            let list = LinkedList.create();
            list.push('a');
            list.push('b');
            list.push('c');
            
            expect(list.removeValue('b')).toEqual(1);
            expect(list.removeValue('q')).toEqual(-1);
        });
    });
});

describe('#removeIndex', function() {
    describe('no index is provided', function() {
        it('throws an error', function() {
            let list = LinkedList.create();
            expect(() => list.removeIndex()).toThrow(new Error('Index provided must be a positive or zero integer'));
        });
    });
    describe('an index is provided', function() {
        it('removes the element at that index', function() {
            let list = LinkedList.create();
            list.push('a');
            list.push('b');
            list.push('c');
            list.removeIndex(1);
            
            expect(list.length()).toEqual(2);
            expect(list.at(0)).toEqual('a');
            expect(list.at(1)).toEqual('c');
        });
    });
});

describe('#at', function() {
    describe('no index or an invalid index is provided', function() {
        it('throws an error', function() {
            let list = LinkedList.create();
            expect(() => list.at()).toThrow(new Error('Index provided must be a positive or zero integer'));
            expect(() => list.at('a')).toThrow(new Error('Index provided must be a positive or zero integer'));
        });
    });
    describe('a valid index is provided', function () {
        it('returns the data at that index', function() {
            let list = LinkedList.create();
            list.push('a');
            list.push('b');
            list.push('c');

            expect(list.at(0)).toEqual('a');
            expect(list.at(2)).toEqual('c');
        });
    });
});
