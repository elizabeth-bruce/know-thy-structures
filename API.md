# API Documentation

####Linked Lists

*Static Methods*

**LinkedList.create([value])**

Creates a new LinkedList, with the optional parameter used as the head value of the list.

```
LinkedList.create(); LinkedList { head: null }
LinkedList.create('foo'); // LinkedList { head: { data: 'foo', next: null } }
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
let list = LinkedList.create('foo');
list.push('bar');
list.push('baz');

list.removeValue('bar'); // 1
list.length(); // 2
list.at(1); // 'baz'
```

**removeIndex(idx)**

Removes the element at the index specified by the provided argument and returns that element, or -1 if the list did not contain that index.

```
let list = LinkedList.create('foo');
list.push('bar');
list.push('baz');

list.removeIndex(1); // 1
list.length(); // 2
list.at(1); // 'baz'
```

**at(idx)**

Returns the element at the index specified, or `null` if the list did not contain that index.

```
let list = LinkedList.create('foo');
list.push('bar');
list.push('baz');

list.at(1); // 'bar'
```