'use strict';

const _ = require('lodash');

const TrieNode = {
    create(chara) {
        const proto = {
            addString(text) {
                if (text === '') {
                    this.children['*'] = TrieNode.create('*');
                    return;
                }

                let [nextChar, ...tail] = text,
                    tailString = tail.join('');

                if (!(nextChar in this.children)) {
                    this.children[nextChar] = TrieNode.create(nextChar);
                }
                this.children[nextChar].addString(tailString);
            },
            hasChildString(text) {
                if (text === '') {
                    return '*' in this.children;
                }

                let [nextChar, ...tail] = text,
                    tailString = tail.join('');

                return nextChar in this.children && this.children[nextChar].hasChildString(tailString);
            },
            childrenStrings() {
                return _(this.children)
                       .values()
                       .flatMap((el) => el.childrenStrings())
                       .concat('*' in this.children ? '' : [])
                       .map((string) => this.character.concat(string))
                       .valueOf();
            }
        };
        return Object.create(proto, {
            character: { writable: false, configurable: true, enumerable: true, value: chara || '' },
            children: { writable: true, configurable: true, enumerable: true, value: {} }
        });
    }
};

module.exports = TrieNode;
