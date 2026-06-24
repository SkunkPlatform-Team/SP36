# SP36

SP36 is a text encoder/decoder used by SkunkPlatform.

## Client Side

```html
<script src="https://cdn--skunkplatform.netlify.app/finescripts/sp36.js"></script>
````

```js
sp36.encode("hehe");
// SPbLbIbLbI=-=-

sp36.decode("SPbLbIbLbI=-=-");
// hehe
```

## Server Side

```js
const sp36 = require("./sp36-serverside");
```

## Format

Prefix:
SP

Suffix:
=-=-

Example:

SPbLbIbLbI=-=-

## Part of

SkunkPlatform, Fine! Scripts (SPFS)
