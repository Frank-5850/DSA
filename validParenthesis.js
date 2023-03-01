// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const pairs = {
  "{": "}",
  "[": "]",
  "(": ")",
};

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
    return false;
  }

  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "{"
  ) {
    return false;
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(`()`));
console.log(isValid(`()[]{}`));
console.log(isValid(`(]`));
