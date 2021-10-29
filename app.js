const isPalindrome = (str) => {
  let reversedStr = '';
  str = str.trim().toLowerCase().split('');
  str = toAlphaNum(str);
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  console.log(str == reversedStr)
  console.log(str);
  console.log(reversedStr);
}

const toAlphaNum = (str) => {
  const validCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
  let alphaNumStr = '';
  for(let i = 0; i < str.length; i++) {
    for(let y = 0; y < validCharacters.length; y++) {
      if(str[i] == validCharacters[y]) {
        alphaNumStr += str[i];
      }
    }
  }
  return alphaNumStr;
}