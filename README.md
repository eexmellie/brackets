## Goal

The goal was to implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('[(])', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

## Checking the solution

1. Clone this repo.

2. Run `npm install`

3. Run `npm test` for confirmation. You can add your own tests to *test.js* to verify the solution.


## N.B.

There is simple and obvious approach for this task, which is to use **stack** data structure. One can compare each incoming element to the last one and find any discrepancies in the sequence.  
However, my personal goal was to implement solution using RegExp, which can be seen in the *src/index.js*
