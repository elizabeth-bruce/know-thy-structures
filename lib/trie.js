'use strict';

const TrieNode = require('./trie-node');

const Trie = {
    create() {
        let root = TrieNode.create();

        const proto = {
            addString: root.addString.bind(root),
            hasString: root.hasChildString.bind(root),
            getStrings: root.childrenStrings.bind(root),
            toString() {
                return 'Trie {}';
            },
            inspect() {
                return this.toString();
            }
        };
        return Object.create(proto, {
            root: { writable: true, configurable: true, enumerable: true, value: root }
        });
    }
};

module.exports = Trie;
