Be able to explain clearly the following topics:

- primitive values, types and type conversions
- function declarations, expressions and scopes
- variable scopes and hoisting
- object properties and mutation
- assignments and comparison
- pure functions and side effects



## Primitive values, types and type conversions

In JavaScript(ES5) there are five primitive data types:
- number
- boolean
- string
- null
- undefined

and one compound data type:
- object

##### Number

Javascipt uses Double Precision Floats, which is a computer number format, usually occupying 64 bits in memory. JS uses the floating point system to represent all numbers - unlike other languages that have distinct data types to represent integer, float, double, real, or decimal values.

*The best practice is to avoid fractional numbers as much as you can.* This is because floating point values cannot precisely represent values...

`0.1 + 0.2; // returns 0.3000000000000000004, not 0.3`

There are a few special number values:
- `Infinity`: when you need a number that's greater than any other number.
- `-Infinity`: when you need a number that's less that any other number.
- `NaN`: means 'not a number'. You will see NaN when a math function encounters an error.

##### Boolean

There are only two possible boolean values: `true` and `false`.


##### String

Javascript strings can have no size limit and can contain any amount of text.

Some common formatting characters that need escape sequences:

- `\n` New Line
- `\t` Tab
- `\r` Carriage return
- `\v` Verticcal tab
- `\b` Backspace

*Character Access*

Strings act like a collection of characters. To access a character in a string, we can use the `String.prototype.charAt()` method. Or we can use bracket notation a la `'hello'[1]`.

When writing long string lines, it's best to split the string up and concatenate that separate strings:

`var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
             'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '`


##### Primitive Values Are Immutable

All JS primitives are immutable: meaning you cannot change them once you create them. Primitive values, especially strings, may appear to change. However, Javascript doesn't actually change the values; instead, it assigns wholly new values to variables that used to contain different values.

To change the value of a variable holding an immutable data type, we must use reassignment.


#### Explicit Primitive Type Coercions

At times we want to convert primitive JS values into different types. We may want to convert '345' into 345. Such operations are called coercions or conversions. JS doesn't actually convert values. Instead, it returns a new value of the proper type.

######Converting Strings to Numbers

We can use the `Number()` function to turn strings that contain a numeric value into a number.

If the string cannot be converted into a number, `Number()` returns `NaN`.

The `parseInt()` and `parseFloat()` global functions turn strings into numbers, with each only handling numeric values in an integer or floating-point format.

######Converting Numbers to Strings

You can use the `String()` function to turn numbers into strings.
`String(123); // "123"`

We can also call the `toString()` method on numbers:
`(123).toString(); // "123"`

######Booleans to Strings

To turn boolean values (`true` and `false`) into strings, you can use the `String()` function:

`String(true); // "true"`

OR

`true.toString(); // "true"`

######Primitives to Booleans?

There is no direct coercion of strings to booleans. Therefore, if you have a string representation of a boolean, you can just compare it with 'true' to determine whether that string is 'true' or 'false':
```js
var a = 'true';
var b = 'false';
a === 'true'; // true
b === 'true'; // false
```

######Boolean()

We can also use the `Boolean()` function to convert any value into a boolean value based on the truthy and falsy rules in JavaScript:

```js
Boolean(null);           // false
Boolean(NaN);            // false
Boolean(0);              // false
Boolean('');             // false
Boolean(false);          // false
Boolean(undefined);      // false
Boolean('abc');          // other values will be true
Boolean(123);            // true
Boolean('true');         // including the string 'true'
Boolean('false');        // but also including the string 'false'!
```

The double `!` operator also returns the value's boolean equivalent:

```js
!!(null);                // false
!!(NaN);                 // false
!!(0);                   // false
!!('');                  // false
!!(false);               // false
!!(undefined);           // false

!!('abc');               // true
!!(123);                 // true
!!('true');              // true
```


####Implicit Primitive Type Coercions

Here's what we mean by implicit type coercions:

```js
1 + true // true is coerced to the number 1, so the result is 2
'4' + 3        // 3 is coerced to the string '3', so the result is '43'
false == 0     // false is coerced to the number 0, so the result is true
```

In other programming languages, the above expressions will produce errors or exceptions, but JavaScript tries to make sense of the expression. If necessary, it converts values to types that it can operate on.

*as a rule, you should avoid these automatic type conversions.*

###### The Plus (+) operator

The plus operator means either addition for numbers or concatnation for strings. When `+` is used with mixed operands that include a string, Javascript converts the other operand to a string as well:

```js
'123' + 123     // "123123" -- if a string is present, coerce for string concatenation
123 + '123'     // "123123"
null + 'a'      // "nulla" -- null is coerced to string
'' + true       // "true"
```

When both operands are a combination of numbers, booleans, `null`s, or `undefined`'s, they are converted to numbers and added together.

```js
1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN
```

When one of the operands is an object (including arrays and functions), both operands are converted to strings and concatenated together:

```js
[1] + 2                     // "12"
[1] + '2'                   // "12"
[1, 2] + 3                  // "1,23"
[] + 5                      // "5"
[] + true                   // "true"
42 + {}                     // "42[object Object]"
(function foo() {}) + 42    // "function foo() {}42"
```

######Other Arithmetic Operators

The other arithmetic operators `-`, `*`, `/` and `%` are only defined for numbers, so Javascript converts both operands to numbers:

```js
1 - true                // 0
'123' * 3               // 369 -- the string is coerced to a number
'8' - '1'               // 7
-'42'                   // -42
null - 42               // -42
false / true            // 0
true / false            // Infinity
'5' % 2                 // 1
```

#######Equality operators

Strict equality operators:

With the strict equality operators, the two operands are only equal if they are both the same type and have the same value:

```js
1 === 1               // true
1 === '1'             // false
0 === false           // false
'' === undefined      // false
'' === 0              // false
true === 1            // false
'true' === true       // false
```

Non-strict equality operators:

these work exactly the same as strict equality operators when both operands are the same type. However when the operands are different types, JS implicitly coerces them to the same type before comparing them using these rules:

*when one operand is a string and the other is a number, the string is converted to a number:*

```js
'42' == 42            // true
42 == '42'            // true
42 == 'a'             // false -- becomes 42 == NaN
0 == ''               // true -- becomes 0 == 0
0 == '\n'             // true -- becomes 0 == 0
```

*when one operand is a boolean it is converted to a number:*

```js
42 == true            // false -- becomes 42 == 1
0 == false            // true -- becomes 0 == 0
'0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
'' == false           // true -- becomes '' == 0, then 0 == 0
true == '1'           // true
true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN
```

*when one operand is null, and the other is undefined, the non-strict operator always returns true. If both operands are `null` or both are `undefined`, the return value is `true`. Comparing `null` or `undefined` to all other values returns false:*

```js
null == undefined      // true
undefined == null      // true
null == null           // true
undefined == undefined // true
undefined == false     // false
null == false          // false
undefined == ''        // false
undefined === null     // false -- strict comparison
```

*When one of the operands is `NaN`, the comparison always returns `false`:*

```js
NaN == 0              // false
NaN == NaN            // false
NaN === NaN           // false -- even with the strict operator
NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself
```

###### Relational operators

The relational operators, <, >, <=, and >= are defined for numbers (numeric comparison) and strings (lexicographic order). There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

```js
11 > '9'              // true -- '9' is coerced to 9
'11' > 9              // true -- '11' is coerced to 11
123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a'            // also false
true > null           // true -- becomes 1 > 0
true > false          // true -- also becomes 1 > 0
null <= false         // true -- becomes 0 <= 0
undefined >= 1        // false -- becomes NaN >= 1
```

When writing programs, it's best to:

*Always use explicit type coercions*
*Always use strict equality operators*


##function declarations, expressions and scopes

####Defining functions

A function declaration has:
- a `function` keyword
- the name of the function
- a list of comma separated parameters
- a block of statements (the function body)

###### Parameters vs Arguments

Parameters and arguments are two terms often mixed up.

Take:
```js
function multiply(a, b) {
  return a * b;
}
```

We say that the function `multiply()` takes two parameters, `a` and `b`. We call the actual values passed to a function during execution its arguments. In the following code, `5` and `6` are the functions arguments:

`multiply(5, 6);`

During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same names as the function's parameters. Within the function body, we call these local variables arguments.

####Functional scopes and lexical scoping

A variable's scopeis the part of the program that can access that variable by name. Variable scoping rules describe how and where the language finds and retrieves values from previously declared variables.

In Javascript, every function creates a new variable scope.

######The global scope

Very small programs with no functions exist entirely within a single, global scope:

```js
var name = 'Julian';
console.log(name);

for (var i = 0; i < 3; i += 1) {
  console.log(name);
}
```

######Function Scope

If we had a function:
```js
var name = 'Julian';

function greet() {
  console.log(name);
}
```

When we invoke the `greet()` function, it can access the `name` variable since the code within a function inherits access to all variables in all surrounding scopes:

`greet(); // logs: Julian`

#######Closures

When we define a function, it retains access to, or closes over, the variable scope currently in effect. We call this *creating a closure*. A closure retains references to everything that is in scope when the closure is created, and retains those references for as long as the closure exists. This means the function can still access those references wherever we invoke the function.

For example, we can call the `greet` function anywhere in the program; it can still access `name` even if `name` is out of scope at the invocation point.

The *value* of a variable can change after creating a closure that includes the variable. When this happens, the closure sees the new value; the old value is no longer available.


#####Lexical scoping

JS uses Lexical Scoping to resolve variables; it uses the structure of the source code to determine the variable's scope. That is, *the source code defines the scope*. At any point in a JavaScript program, there is a hierarchy of scopes from the local scope of the code up to the program's global scope.

When JS tries to find a variable, it searches the hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can _shadow_, or hide, a variable with the same name in a higher scope.

#####Adding Variables to the Current Scope

There are three ways to create a variable in the current scope. First, you can use the `var` keyword. Second, uses the arguments passed to a function. The third is the function declaration itself, which creates a variable with the same name as the function.

#####Variable assignment

This code:
`country = 'Liechtenstein';`

checks the current scope and then each higher scope, looking for a variable with the name `country`. Javascript sets the first `country` variable it finds to `Liechtenstein`.

If JS can't find a matching variable, it creates a new global variable instead. This is rarely what you want; it can be the source of subtle bugs.

example:
```js
// no other code above
function assign() {
  var country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);   // logs: Spain
console.log(country1);   // gets ReferenceError
// no other code below
```

Here, JS couldn't find a variable `country2` so it created a new global variable and assigned it to the value of `'Spain'`.

#### Function declarations and function expressions

######Function Declarations

Let's examine a function declaration:

```js
function hello() {
  return 'hello world!';
}

console.log(typeof hello);    // function
```

A function declaration (sometimes called a "function statement") defines a variable whose type is `function`. It does not require assignment to a variable. The value of the function variable is the function itself. This "function variable" obeys general scoping rules, and we can use it exactly like other JS variables.

It is important to realize a function declaration not only creates a function, but also creates a variable. We previously learned that two ways to create a variable in the current scope are by using the `var` keyword or by passing arguments to a function. A function declaration gives us a third way. A function declaration defines a function, declares a variable with the same name as the function, and then assigns the function to that variable. So.... *for every function declaration, a variable is initialized.*

###### Function expressions

A function expression defines a function as part of a larger expressions syntax.

```js
var hello = function () {
  return 'hello';
};

console.log(typeof hello);    // function
console.log(hello());         // hello
```

Here we defined an anonymous function (one without a name) and assign it to `hello`. We then use the variable to invoke the function.

######Named function expressions

We can also name function expressions:

```js
var hello = function foo() {
  console.log(typeof foo);   // function
};

hello();

foo();                       // Uncaught ReferenceError: foo is not defined
```

However, the name is only available inside the function. Though most function expressions use anonymous functions, the named function expressions are useful for debugging. Also, they can be useful for recursive functions.



#### Variable scopes and hoistinig


###### Hoisting

JavaScript processes variable declarations before it executes any code within a scope. So, declaring a variable anywhere in the scope is equivalent to declaring it at the top of the scope. This is called *hoisting*; JS moves the variable declarations to the top of the scope.

this code:
```js
console.log(a);  // Will this code execute? What will it log?
var a = 123;
var b = 456;
```

is equivalent to:

```js
var a;           // hoisted to the top of the global scope
var b;

console.log(a);  // logs `undefined`
a = 123;
b = 456;
```

**JavaScript hoists only variable declarations, not assignments.**

######Hoisting for function declarations

JS also hoists function declarations to the top of the scope; it hoists the entire function declaration, including the body.

this:
```js
console.log(hello());

function hello() {
  return 'hello world';
}
```

is equivalent to:
```js
function hello() {
  return 'hello world';
}

console.log(hello());      // logs "hello world"
```

######Hoisting for function expressions

function expressions often involve assigning a function to a declared variable; since such expressions are just variable declarations, they obey the hoisting rules for variable declarations.

this:
```js
console.log(hello());

var hello = function () {
  return 'hello world';
};
```

is equivalent to:
```js
var hello;

console.log(hello());    // raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};
```


#####Hoisting Variable and Function Declarations
When both a variable and a function declaration exist, the function declaration is hoisted first (located above the variable declaration).

Given this:

```js
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

it's equivalent after hoisting is:

```js
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';
```


###### Best practice to avoid confusion
Hoisting can introduce confusion and subtle bugs. If you follow these simple rules, you'll avoid many headaches:

- Always declare variables at the top of their scope:

```js
function foo() {
  var a = 1;
  var b = 'hello';
  var c;

  ...
}
```

- Always declare functions before calling them:

```js
function foo() {
  return 'hello';
}

foo();
```



#### Object Properties and mutation

One thing to notice is that some of the built-in objects share their names with some of the primitive data types(i.e. `String` and `Number`). While the names are the same, they differ from each other. As primitive values, we theoretically can't call methods on them(i.e., getting the length of a string) since it is only the obejct data type that you can call methods on. *Luckily Javascript temporarily coerces primitives to their object counterpart when necessary.*

####### Creating custom objects

You can create your own objects using the object literal notation:
```js
var colors = {
  red: '#f00',
  orange: '#ff0',
};

typeof colors;      // "object"
colors.red;         // "#f00"
colors.orange;      // "#ff0"
```

#######Properties

Objects are containers for two things: data and behavior. The data consists of named items with values; the values represent the attributes of the object. In Javascript we call these associations between a name and a value, properties.

To get the value of an object property, you can append a single dot followed by the property name, to the object's name:

```js
var animal = 'turtle';
animal.length;          // 6

var colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.red;             // "#f00"

'blue'.length;          // 4 - works with primitives too
```


You can set a new value for a property with assignment:

```js
var count = [0, 1, 2, 3, 4];
count.length = 2;

var colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.blue = '#00f';
```

######Methods

Functions define the behavior of an object. When they are part of an object, we call them methods. To call a method on an object, you access the method as though it is a property -- *because it is* -- and call it by appending parenthesis. You can pass arguments to the method by listing them between the parenthesis, just like with a function call. In fact, JavaScript methods are just functions with some special behavior that we'll explore later.

#### Object Properties

Property names and values

A property name for an object can be any valid string, and a property value can be any valid expression.

You can access property values using "dot notation" or "bracket notation". Use dot notation when possible.

To add a new property to an object, use "dot notation" or "bracket notation" and assign a value to the result:

```js
var object = {};              // empty object

object.a = 'foo';
object.a;                     // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" }
```

If the named property exists, the assignment updates the property's value.

You can use the reserved keyword `delete` to delete properties from objects:

```js
var foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;                      // { b: "world" }
```


#### Stepping through object properties

A common task is to perform some action for each element in a collection. You can do this with a `for...in` loop:

```js
var nick;

var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

You can also retrieve the names of all properties in an object with `Object.keys()`:


```js
var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

###### Mutability of Values and Objects

Primitive values are *immutable*: you cannot modify them. Operations on these values return a new value of the same type.

Objects are *mutable*: you can modify them without changing their identity. Objects contain data inside themselves; it's this inner data that you can change.

It's really that simple.

##### Pure functions and side effects

We've seen that Functions can modify external values. They can directly modify variables defined in outer scopes, or they can mutate Objects passed to the Function as arguments. We call such changes to the world outside the function side effects.

When a function doesn't have any side effects, we call it a *pure function*. a pure function is a function that 1) does not have any side effects, and 2) always has the same return values given the same arguments.

- Pure functions always return values. A function that has no side effects and doesn't return a value can't do much of anything.

Here is a short pure function:

```js
function add(a, b) {
  return a + b;
}
```

Notice how the function doesn't modify any external values. However, this similar function has side effects:

```js
var sum = 0;
function add(a, b) {
  sum = a + b;
}
```

the second `add` Function changes the value of `sum`; that's a side effect. Thus this version of the function is not pure.

This isn't a pure function because it does not return the same result given the same argument value(s):

```js
var currentTotal = 0;
function addToTotal(num) {
  return currentTotal + num;
}

addToTotal(5);      // returns 5

currentTotal = 5;

addToTotal(5);      // returns 10
```


Finally, the following function isn't a pure function even though it always returns the same value given the same argument because it has the side effect of dropping elements from the array argument passed to it:

```js
function clear(array) {
  array.length = 0;
  return array;
}
```



#######Pure function return value vs. non-pure function side effects

When you write a function, be mindful of whether you want a pure function or want to use side effects. If you use a function for its return value, you usually want the function call as part of an expression, or as the right hand side of an assignment.

```js
function joinString(a, b, c) {
  return a.concat(b, c);
}

var result = joinString('hello,', ' ', 'world!');
console.log(result);             // logs "hello, world!"
```

most developers reading line 5^ would expect this function to not have side effects; the fact that it captures and uses the return value is a major clue.

If you use a function for a side effect, try to pass the variable(s) you will mutate as arguments:


```js
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
}

removeElement(friends, 'David');     // undefined
friends;                             // ["Joe", "Mary"]
```


**functions that cause unexpected side effects are a major source of bugs.**









~
