##1
```js
var i;
for (i = 1; i < 100; i += 2) {
  console.log(i);
}
```

When the program is executed, we declare the variable `i` on line 3. We then create a `for` loop on line 4 and assign `i` to the value of 4; set the conditions so that the loop will continue as long as `i` is less than `100` and `i` will increment by 2 on each iteration.

On the first iteration, line 5 will output `1` to the console, and then `3`, all the way up to `99` when the loop will end.

##2
```js
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```

When the function is executed, the variable `year` inside the `isLeapYear` function will be set to the value passed into the function as an argument, which in thise case is `400`.

On line 16 we begin a conditional statement which will evaluate to `true` because `400 % 400 === 0`. This will execute line 17 which explicitly returns `true`.


##3
```js
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
```

The function `isPalindrome` has one parameter `string` which will be assigned to the argument passed in when we call the function. When the function is executed, `string` is assigned to `mama`.

On line 34 we explicitly return the value of the expression `string === string.split('').reverse().join('')`. This expression is evaluating whether the value of `string` is strictly equal to the value of first, splitting the string into an array of its individual characters, then reversing that array, and finally joining the array back together into a single string.

Given the value of `string` is `"Mama"`, the expression will evaluate `mama === mama` which will return `true`. The function then explicitly returns `true`.



##4
```js
function runningTotal(array) {
  var resultArray = [];
  var sum = 0;
  var i;

  for (i = 0; i < array.length; i += 1) {
    resultArray.push(sum += array[i]);
  }

  return resultArray;
}
```






##5
```js
function wordSizes(words) {
  var wordsArray = words.split(' ');
  var count = {};
  var wordSize;
  var i;

  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}
```

##6

```js


```
