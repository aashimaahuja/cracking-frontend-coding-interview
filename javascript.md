###### 1. What's the output?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Aashima";
  let age = 21;
}

sayHi();
```

- A: `Aashima` and `undefined`
- B: `Aashima` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Since `name` is declared with `var`, name would be hoisted with the default value as `undefined` till we reach the line where the value is assigned.

Unline `var` , `let` and `const` variables are not hoisted. They are scoped variables. They get declared and initialised when we reach the line where
they are defined.

</p>
</details>

---

###### 2. What's the output?

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

</p>
</details>

---

###### 3. What's the output?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2 3 4` and `0 1 2 3 4`
- B: `0 1 2 3 4` and `5 5 5 5 5`
- C: `5 5 5 5 5` and `0 1 2 3 4`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

</p>
</details>

---

###### 4. What's the output?

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

</p>
</details>

---

###### 5. What's the output?

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

</p>
</details>

---

JS interview Questions

Strings - important methods & exercise - remove duplicates from a string
Array - important methods - Array flatten - map filter reduce polyfill - memo - chunk

DOM Tree - Concept - DOM tree exercise

Throttle , debounce - concept - polyfill

Currying - concept - example

Promises

Currying - Basic
Advanced - currying
Strings - remove duplicates from a string
Array flatten
Throttle
Debounce
Create chunk
map filter reduce
memoise
DOM tree

Promises

---

### Strings

Useful Methods:

- split()
- toLowerCase()
- substring()
- startsWith()
