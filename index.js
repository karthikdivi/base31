const alphabet = "23456789abcdefghjkmnpqrstuvwxyz";  // Inspired by https://github.com/jimeh/node-base58
const base = alphabet.length;

// Create a lookup table to fetch character index
const alphabetLookup = [...alphabet].reduce((lookup, char, index) => {
  lookup[char] = index;
  return lookup;
}, {});

function assertNonNegativeSafeInteger(val) {
  if (
    typeof val !== "number" ||
    isNaN(val) ||
    val < 0 ||
    val > Number.MAX_SAFE_INTEGER ||
    Math.floor(val) !== val
  ) {
    throw new Error("Value passed is not a non-negative safe integer.");
  }
}

function assertString(str) {
  if (typeof str !== "string") {
    throw new Error("Value passed is not a string.");
  }
}

function assertBase31Character(character) {
  if (alphabetLookup[character] === undefined) {
    throw new Error("Value passed is not a valid Base31 string.");
  }
}

exports.int_to_base31 = exports.encode = function(num) {
  let str = "";
  let modulus;

  num = Number(num);

  assertNonNegativeSafeInteger(num);

  while (num >= base) {
    modulus = num % base;
    str = alphabet[modulus] + str;
    num = Math.floor(num / base);
  }

  return alphabet[num] + str;
};

exports.base31_to_int = exports.decode = function(str) {
  assertString(str);
  return [...str].reverse().reduce((num, character, index) => {
    assertBase31Character(character);
    return num + alphabetLookup[character] * Math.pow(base, index);
  }, 0);
};
