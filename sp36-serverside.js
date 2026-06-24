const PREFIX = "SP";
const SUFFIX = "=-=-";

const ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-*.,";

const BASE = ALPHABET.length;

function encode(input) {
  const bytes = new TextEncoder().encode(String(input));
  let result = PREFIX;

  for (const byte of bytes) {
    const a = Math.floor(byte / BASE);
    const b = byte % BASE;

    result += ALPHABET[a];
    result += ALPHABET[b];
  }

  return result + SUFFIX;
}

function decode(input) {
  let data = String(input);

  if (data.startsWith(PREFIX))
    data = data.slice(PREFIX.length);

  if (data.endsWith(SUFFIX))
    data = data.slice(0, -SUFFIX.length);

  const bytes = [];

  for (let i = 0; i < data.length; i += 2) {
    const a = ALPHABET.indexOf(data[i]);
    const b = ALPHABET.indexOf(data[i + 1]);

    if (a < 0 || b < 0)
      throw new Error("Invalid SP36 string");

    bytes.push(a * BASE + b);
  }

  return new TextDecoder().decode(new Uint8Array(bytes));
}

function verify(value) {
  return (
    typeof value === "string" &&
    value.startsWith(PREFIX) &&
    value.endsWith(SUFFIX)
  );
}

module.exports = {
  version: "sp36-1.0",
  encode,
  decode,
  verify,
  alphabet: ALPHABET,
  prefix: PREFIX,
  suffix: SUFFIX
};
