# API Documentation

#### Linked Lists

*Static Methods*

**LinkedList.create([value])**

Creates a new LinkedList, with the optional parameter used as the head value of the list.

```
LinkedList.create(); LinkedList { head: null }
LinkedList.create('foo'); // LinkedList { head: { data: 'foo', next: null } }
```

**LinkedList.fromArray(array)**

Creates a new LinkedList with the array values provided.

```
let list = LinkedList.fromArray(['a', 'b']);
list.at(0); // 'a'
list.at(1); // 'b'
```

*Members*

**length()**

Returns the length of the list.

```
let list = LinkedList.create('foo');
list.length(); // 1
```

**push(value)**

Appends the provided argument onto the end of the list and returns the length of the newly-appended list.
```
let list = LinkedList.create('foo');
list.push('bar'); // 2
```

**pop(value)**

Removes and returns the last value of the list.
```
let list = LinkedList.create('foo');
list.pop(); // 'foo';
```

**removeValue(value)**

Removes the first occurrence of the provided argument from the list and returns the index of the element removed, or -1 if no element was found.

```
let list = LinkedList.fromArray(['foo', 'bar', 'baz']);

list.removeValue('bar'); // 1
list.length(); // 2
list.at(1); // 'baz'
```

**removeIndex(idx)**

Removes the element at the index specified by the provided argument and returns that element, or -1 if the list did not contain that index.

```
let list = LinkedList.fromArray(['foo', 'bar', 'baz']);

list.removeIndex(1); // 1
list.length(); // 2
list.at(1); // 'baz'
```

**at(idx)**

Returns the element at the index specified, or `null` if the list did not contain that index.

```
let list = LinkedList.fromArray(['foo', 'bar', 'baz']);

list.at(1); // 'bar'
```

**indexOf(idx)**

Returns the index of the first occurrence of the element in the list, or `-1` if the list did not contain that element.

```
let list = LinkedList.fromArray(['a','b','c']);

list.indexOf('b'); // -1
```
#### Min Heaps

*Static Methods*

**MinHeap.create()**

Creates a new, empty min heap.

```
let heap = MinHeap.create();
heap; // MinHeap { heap: [] }
```

_Members_

**size()**

Returns the number of elements in the heap.

```
let heap = MinHeap.create();
heap.insert(1);
heap.insert(2);

heap.size(); // 2
```

**toArray()**

Returns the array representation of the heap.

```
let heap = MinHeap.create();

heap.insert(3);
heap.insert(2);
heap.insert(1);
heap.insert(5);

heap.toArray(); // [ 1, 3, 2, 5 ]
```

**insert(el)**

Inserts an element into the heap.

```
let heap = MinHeap.create();

heap.insert(3);

heap.toArray(); // [3]
```

**extractMinimum()**

Removes the minimum element of the array, rebalances the heap, and returns the removed element.

```
let heap = MinHeap.create();

heap.insert(3);
heap.insert(1);
heap.insert(2);

heap.extractMinimum(); // 1

heap.toArray() // [2,3]
```

#### Tries

*Static Methods*

**Trie.create()**

Creates an empty trie.

```
let trie = Trie.create(); // Trie {}
```

_Members_

**addString(string)**

Adds a string to the trie.

```
let trie = Trie.create();

trie.addString('abc');

trie.getStrings(); // ['abc']
```

**hasString(string)**

Returns whether the given string has been registered in the trie.

```
let trie = Trie.create();

trie.addString('abc');

trie.hasString('abc'); // true
trie.hasString('ab'); // false
trie.hasString('def'); // false
```

**getStrings()**

Returns the full list of strings registered in the trie.

```
let trie = Trie.create();

trie.addString('abc');
trie.addString('def');
trie.addString('ab');
trie.addString('ghi');

trie.getStrings(); // ['abc', 'ab', 'def', 'ghi']
```