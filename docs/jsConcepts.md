### JS Concepts

#### Currying

Transforms function callable from
f(a,b,c) -> f(a)(b)(c)

```js
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3)); // 6
```

Curried function

```js
// usage sum(1)(2)(3) -> 6

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
```

---

### Debounce & Throttle

Debounce and throttle both are performace
optimisation techniques. It basically controls how many times your functions get executed

**Debounce**

<img src="../images/debounce1.png"/>
<img src="../images/debounce2.png"/>
<img src="../images/debounce3.png"/>

---

**Throttle**

<img src="../images/throttle1.png" />
<img src="../images/throttle2.png"/>

---

### Event Loop

```js
var a = 2;
function foo() {
  console.log("foo");
}
function bar() {
  setTimeout(() => {
    console.log("bar");
  }, 0);
}

bar();
foo();
fetch("/users").then(displayUsers);
```

<img src="../images/jsExecution.png" />

- SetTimeout callback goes into callback queue
- Promises are sent to microtask queue
