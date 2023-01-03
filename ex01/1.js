function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNuemric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function Charcount2(str) {
  let hell = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(str)) {
      hell[char] = ++hell[char] || 1;
    }
  }
  return hell;
}

function isAlphaNuemric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 96) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
console.log(charCount("Hithereeeeeee"));
console.log(Charcount2("eweqeqweqeqeqeqeqweq"));
