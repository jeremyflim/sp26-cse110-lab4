# DevTools Part 2

1. The bug was that the values read from the two input boxes were strings, not numbers. Because `calculateSum(num1, num2)` used `num1 + num2`, JavaScript concatenated the strings instead of adding numerically. With the default inputs, it would produce `"23"` instead of `5`.

2. I would fix it by converting the input values to numbers before adding them. For example:

```js
function printSum() {
    debugger;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
    let result = num1 + num2;
    return result;
}
```
