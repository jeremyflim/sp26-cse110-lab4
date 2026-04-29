# Part 2

1. Line 12 prints `3` because `i` was declared with `var`, so it is function-scoped and still exists after the loop. After the loop finishes, `i` equals `3`.
2. Line 13 prints `150` because `discountedPrice` was declared with `var`, so it is also function-scoped. Its final value comes from the last loop iteration: `300 * (1 - 0.5) = 150`.
3. Line 14 prints `150` because `finalPrice` is function-scoped and keeps the last rounded discounted price assigned in the loop.
4. The function returns `[50, 100, 150]` because each original price is discounted by `50%` and pushed into the `discounted` array.
5. Line 12 throws a `ReferenceError` because `i` is declared with `let` in the `for` loop, so it only exists inside the loop block.
6. Line 13 throws a `ReferenceError` because `discountedPrice` is declared with `let` inside the loop body and cannot be accessed outside that block.
7. Line 14 prints `150` because `finalPrice` is declared outside the loop, so it is still in scope after the loop ends and contains the last assigned value.
8. The function returns `[50, 100, 150]` because the loop builds the discounted array the same way as before, and the `let` declarations do not change that returned result.
9. Line 11 throws a `ReferenceError` because `i` is declared with `let` inside the loop and is not available after the loop ends.
10. Line 12 prints `3` because `length` is declared with `const` in the function scope, so it is accessible outside the loop and equals `prices.length`.
11. The function returns `[50, 100, 150]`. Declaring `discounted` with `const` is fine here because the array itself is not reassigned; its contents are mutated with `push()`.
12. Object notation:
    - A. `student.name`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher'].name`
    - E. `student.courseLoad[0]`
13. Arithmetic:
    - A. `'3' + 2` gives `'32'` because `+` with a string triggers string concatenation.
    - B. `'3' - 2` gives `1` because `-` converts `'3'` to the number `3`.
    - C. `3 + null` gives `3` because `null` is converted to `0` in numeric addition.
    - D. `'3' + null` gives `'3null'` because `null` is converted to the string `'null'` during concatenation.
    - E. `true + 3` gives `4` because `true` converts to `1`.
    - F. `false + null` gives `0` because `false` converts to `0` and `null` also converts to `0`.
    - G. `'3' + undefined` gives `'3undefined'` because `undefined` is converted to the string `'undefined'`.
    - H. `'3' - undefined` gives `NaN` because `'3'` becomes `3`, but `undefined` becomes `NaN`, and arithmetic with `NaN` stays `NaN`.
14. Comparison:
    - A. `'2' > 1` is `true` because `'2'` is converted to the number `2`.
    - B. `'2' < '12'` is `false` because both are strings, so JavaScript compares them lexicographically, and `'2'` comes after `'1'`.
    - C. `2 == '2'` is `true` because `==` performs type coercion before comparing.
    - D. `2 === '2'` is `false` because `===` compares both value and type, and one is a number while the other is a string.
    - E. `true == 2` is `false` because `true` becomes `1`, and `1 == 2` is false.
    - F. `true === Boolean(2)` is `true` because `Boolean(2)` evaluates to `true`, and both sides are the boolean value `true`.
15. `==` checks whether two values are equal after allowing type coercion, while `===` checks strict equality without converting types first.
16. See `part2-question16.js`.
17. The result is `[2, 4, 6]`. `modifyArray()` loops through `[1, 2, 3]`, calls `doSomething()` on each item, and `doSomething()` doubles each number, so the new array becomes `[2, 4, 6]`.
18. See `part2-question18.js`.
19. The output is:

```
1
4
3
2
```

`1` prints first, then `4` prints immediately after. The `setTimeout(..., 0)` callback for `3` is placed on the event queue and runs after the current call stack is empty, so it prints next. The `setTimeout(..., 1000)` callback for `2` runs last about one second later.
