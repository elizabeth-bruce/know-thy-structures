'use strict';

const Trie = require('../../lib/index').Trie;

describe('.create', function() {
    it('creates a new Trie with no strings inserted', function() {
        const emptyTrie = Trie.create();

        expect(emptyTrie.getStrings()).toEqual([]);
    });
});

describe('#addString', function() {
    it('adds a string to the trie', function() {
        let trie = Trie.create();
        trie.addString('abcde');

        expect(trie.hasString('abcde')).toBe(true);
    });
});

describe('#hasString', function() {
    it('returns whether a given string has been stored in the trie', function() {
        let trie = Trie.create();
        trie.addString('defghi');

        expect(trie.hasString('defghi')).toBe(true);

        expect(trie.hasString('abcde')).toBe(false);
        expect(trie.hasString('defgh')).toBe(false);
        expect(trie.hasString('defghij')).toBe(false);
    });
});

describe('#getStrings', function() {
    it('returns all strings in the trie', function() {
        let trie = Trie.create();
        trie.addString('abc');
        trie.addString('abcd');
        trie.addString('def');

        expect(trie.getStrings()).toEqual(['abcd', 'abc', 'def']);
         
    });
});
