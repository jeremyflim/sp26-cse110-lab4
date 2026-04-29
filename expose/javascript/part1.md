# Part 1

1. Line 9 prints `values added: 20` because `result` is declared with `var`, assigned `10 + 10`, and is available inside the `if` block.
2. Line 13 prints `final result: 20` because `var` is function-scoped, so `result` is still accessible after the `if` block ends.
3. Because it is function-scoped instead of block-scoped. That makes variables easier to access outside the block where they were intended to live, which can cause unwanted overwrites, bugs, and code that is less readable.
4. Line 9 prints `values added: 20` because `result` is declared with `let`, assigned inside the `if` block, and used there before the block ends.
5. Line 13 throws a `ReferenceError` because `result` was declared with `let`, which is block-scoped, so it does not exist outside the `if` block.
6. Line 9 throws a `TypeError: Assignment to constant variable.` because `result` is declared with `const` and then reassigned on line 7.
7. Line 13 is never reached because the function already throws the error at line 7 when trying to reassign `result`.
