module.exports = function check(str, bracketsConfig) {
  let brackets = [].concat.apply([], bracketsConfig);
  let buffer = [];

  function isOpener(bracket) {
    if (brackets.indexOf(bracket) % 2 === 0) return true;
    else return false
  }

  function isOpenerAndCloser(bracket) {
    if (brackets.indexOf(bracket) % 2 === 0 && brackets.lastIndexOf(bracket) % 2 !== 0) return true;
    else return false
  }

  if (str.length % 2 > 0 || !isOpener(str[0])) return false;

  for (let i = 0; i < str.length; i++) {
    if (isOpener(str[i])) {
      if (!isOpenerAndCloser(str[i])) buffer.push(str[i])
      else {
        if (buffer[buffer.length - 1] !== str[i]) buffer.push(str[i]);
        else buffer.pop()
      }
    }
    else if (brackets.indexOf(str[i]) === brackets.indexOf(buffer[buffer.length - 1]) + 1) {
      buffer.pop()
    }
    else {
      return false;
    }
  }
  if (buffer.length === 0) return true;
  return false;
}
