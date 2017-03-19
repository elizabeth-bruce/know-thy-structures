# Data Structures in ES6

This is a personal project to better understand several common data structures by implementing them in ES6; while this library is intended for purely personal use, please feel free to use it without restriction.

## Getting Started

First install via `npm`:
```
npm install know-thy-structures
```

After which the library will be available via `require`:
```
const Structures = require('know-thy-structures');

const LinkedList = Structures.LinkedList;

let list = LinkedList.create('a');
list.push('b');

list.at(1); // 'b'
```

## API

See the [API doc](API.md) for the full API.