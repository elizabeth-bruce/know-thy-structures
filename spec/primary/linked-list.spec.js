'use strict';

const LinkedList = require('../../lib/index').LinkedList;

describe('.create', function() {
    describe('an init value is provided', function() {
        it('creates a linked list with the provided init value as the first node', function() {
            const list = LinkedList.create('foo');
            expect(list.head).toEqual({ data: 'foo', next: null, previous: null });
            expect(list.tail).toEqual({ data: 'foo', next: null, previous: null });
        });
    });
    describe('no init value is provided', function() {
        it('creates a linked list with a null value as the first node', function() {
            const list = LinkedList.create();
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });
    });
});

describe('.fromArray', function() {
    describe('an init value is provided', function() {
        it('creates a linked list from the values passed in the array', function() {
            const list = LinkedList.fromArray(['a', 'b', 'c']);

            expect(list.length()).toEqual(3);
            expect(list.at(0)).toEqual('a');
            expect(list.at(1)).toEqual('b');
            expect(list.at(2)).toEqual('c');

            expect(list.head.data).toEqual('a');
            expect(list.tail.data).toEqual('c');
        });
    });
});

describe('#length', function() {
    it('returns the length of the linked list', function() {
        let exampleList = LinkedList.fromArray(['a', 'b', 'c']);

        const zeroLengthList = LinkedList.create();

        expect(zeroLengthList.length()).toEqual(0);
        expect(exampleList.length()).toEqual(3);
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
            expect(list.tail.data).toEqual('bar');
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

        let anotherList = LinkedList.fromArray(['foo', 'bar', 'baz']);
        
        expect(anotherList.pop()).toEqual('baz');
        expect(anotherList.tail.data).toEqual('bar');
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
            let list = LinkedList.fromArray(['a', 'b', {foo: 'bar' }]);
            
            list.removeValue({foo: 'bar' });

            expect(list.length()).toEqual(2);
            expect(list.tail.data).toEqual('b');

            list.push('a');
            list.removeValue('a');

            expect(list.length()).toEqual(2);
            expect(list.at(0)).toEqual('b');
        });
        it('returns the index of the value it removed, or -1 if not found', function () {
            let list = LinkedList.fromArray(['a', 'b', 'c']);
            
            expect(list.removeValue('b')).toEqual(1);
            expect(list.removeValue('q')).toEqual(-1);
        });
    });
});

describe('#removeIndex', function() {
    describe('when no index is provided', function() {
        it('throws an error', function() {
            let list = LinkedList.create();
            expect(() => list.removeIndex()).toThrow(new Error('Index provided must be a positive or zero integer'));
        });
    });
    describe('when an index is provided', function() {
        it('removes the element at that index', function() {
            let list = LinkedList.fromArray(['a', 'b', 'c']);
            list.removeIndex(1);
            
            expect(list.length()).toEqual(2);
            expect(list.at(0)).toEqual('a');
            expect(list.at(1)).toEqual('c');
        });
    });
});

describe('#indexOf', function() {
    describe('the element is not in the linked list', function() {
        it('returns -1', function() {
            let list = LinkedList.create();
            list.push('a');

            expect(list.indexOf('b')).toEqual(-1);
        });
    });
    describe('the element is in the linked list', function() {
        it('returns the index of the first occurrence of the element in the list', function() {
            let list = LinkedList.fromArray(['a', 'b', 'c']);
            expect(list.indexOf('b')).toEqual(1);

            let otherList = LinkedList.fromArray(['a', 'b', 'c', 'c']);
            expect(otherList.indexOf('c')).toEqual(2);
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
            let list = LinkedList.fromArray(['a', 'b', 'c']);

            expect(list.at(0)).toEqual('a');
            expect(list.at(2)).toEqual('c');
        });
    });
});
