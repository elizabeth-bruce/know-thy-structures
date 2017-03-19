'use strict';

/*
 * In contrast to the other data structures which use an object factory model of instantiation,
 * I'm actually going to use an ES6 class here.
 */

/*
 * Future TODOS: 
 * dynamically resize table when load gets too high
 * create convenience methods a la Object.* and Map.* in JS
 * support non-string keys
 */

const hashFunction = function(str) {
    if (str.length === 0) {
        return 0;
    }

    return str.split('').reduce((hash, chr) => {
        let newHash = ((hash << 5) - hash) + chr.charCodeAt(0);
        return newHash & newHash;
    }, 0);
};

const HashTable = class {
    constructor(size) {
        const DEFAULT_SIZE = 1000;

        this.size = size || DEFAULT_SIZE;
        this.slots = new Array(this.size);       
    }
    inspect() {
        return 'HashTable {}';
    }
    set(key, value) {
        if (typeof key !== 'string') {
           throw new Error(`HashTable key must be a string, but the following type was provided: ${typeof key}`);
        }

        const hashSlot = hashFunction(key) % this.size;
        let keySlot = this.slots[hashSlot];

        if (keySlot === undefined) {
            this.slots[hashSlot] = [[key, value]];
            return value;
        }

        const elemInKeySlot = keySlot.reduce((found, candidate) => {
            if (candidate[0] === key) {
                candidate[1] = value;
                return true;
            }
            return false || found;
        }, false);

        if (!elemInKeySlot) {
            keySlot.push([key, value]);
        }
        return value;
    }

    get(key) {
        if (typeof key !== 'string') {
           throw new Error(`HashTable key must be a string, but the following type was provided: ${typeof key}`);
        }

        const hashSlot = hashFunction(key) % this.size,
            keySlot = this.slots[hashSlot];

        if (!keySlot) {
            return undefined;
        }
        return keySlot.reduce((found, candidate) => 
            candidate[0] === key ? candidate[1] : found || undefined, undefined);
    }
};

const HashTableWrapper = {
   create() { return new HashTable(); }
};

module.exports = HashTableWrapper;
