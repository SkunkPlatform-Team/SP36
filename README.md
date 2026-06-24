# SP36

SP36 is a lightweight text encoder/decoder used by SkunkPlatform.

## Features

* Encode text into SP36 format
* Decode SP36 strings back to text
* No Base64 dependency
* Browser and Node.js support

## Client Side

Available through **SkunkPlatform, Fine! Scripts (SPFS)**:

```html
<script src="https://cdn--skunkplatform.netlify.app/finescripts/sp36.js"></script>

<script>
console.log(sp36.encode("hello"));
console.log(sp36.decode("SPbLbIbLbI=-=-"));
</script>
```

## Server Side (Node.js)

```js
const sp36 = require("./sp36-serverside");

const encoded = sp36.encode("hello");
console.log(encoded);

const decoded = sp36.decode(encoded);
console.log(decoded);
```

## Example

```js
sp36.encode("hehe");
```

Output:

```txt
SPbLbIbLbI=-=-
```

Decode:

```js
sp36.decode("SPbLbIbLbI=-=-");
```

Output:

```txt
hehe
```

## Format

```txt
SP + encoded-data + =-=-
```

Example:

```txt
SPbLbIbLbI=-=-
```

## License

MIT License
