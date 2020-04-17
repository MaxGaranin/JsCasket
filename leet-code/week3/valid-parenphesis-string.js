/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const tokenStack = [];
  const magicStack = [];
  for (let i = 0; i < s.length; i++) {
    const token = s[i];
    if (token === '(') {
      tokenStack.push(token);
    } else if (token === ')') {
      if (!checkTokenStack()) return false;
    } else if (token === "*") {
      magicStack.push(token);
    } else {
      throw new Error(`Wrong token '${token}' in string '${s}'`);
    }
  }

  if (tokenStack.length === 0) {
    return true;
  } else {
    if (tokenStack.length <= magicStack.length) {
      return true;
    } else {
      return false;
    }
  }

  function checkTokenStack() {
    while (tokenStack.length > 0) {
      const ch = tokenStack.pop();
      if (ch === '(') {
        magicStack.length = 0;
        return true;
      } else if (ch === ')') {
        break;
      }
    }

    if (magicStack.length > 0) {
      magicStack.pop();
      return true;
    } else {
      return false;
    }
  }
};

const result = checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*');
console.log(result);
