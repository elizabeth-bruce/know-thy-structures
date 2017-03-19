'use strict';

const HashTable = require('../../lib/index').HashTable,
    _ = require('lodash');

describe('.create', function() {
    it('creates an empty hash table', function() {
        const hash = HashTable.create();
        expect(_.isEqual(hash.slots, new Array(1000))).toBe(true);
        expect(hash.size).toEqual(1000);
    });
});

describe('#set', function() {
    describe('the key is not a string', function() {
        it('throws an error', function() {
            let hash = HashTable.create();

            expect(() => hash.set({}, 'a')).toThrow(new Error('HashTable key must be a string, but the following type was provided: object'));
            expect(() => hash.set(undefined, 'a')).toThrow(new Error('HashTable key must be a string, but the following type was provided: undefined'));
            expect(() => hash.set(null, 'a')).toThrow(new Error('HashTable key must be a string, but the following type was provided: object'));
        });
    });

    it('sets a value in the hashtable to the specified key', function() {
        let hash = HashTable.create();

        expect(hash.set('a', 'b')).toEqual('b');
        expect(hash.get('a')).toEqual('b');
    });
    it('overwrites older values for a given key if previously set', function() {
        let hash = HashTable.create();

        hash.set('a', 'b');
        hash.set('a', 'c');

        expect(hash.get('a')).toEqual('c');
    });
});

describe('#get', function() {
    describe('the key exists in the table', function() {
        it('returns the corresponding value', function() {
            let hash = HashTable.create();
            hash.set('a', 'b');

            expect(hash.get('a')).toEqual('b');
        });
    });
    describe('the key does not exist in the table', function() {
        it('returns undefined', function() {
            let hash = HashTable.create();

            expect(hash.get('a')).toEqual(undefined);
        });
    });
});
