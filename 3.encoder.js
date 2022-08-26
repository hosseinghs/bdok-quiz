export function encoder({ inputString, repeatCount = 1 }) {
  if (!inputString || inputString.trim().length === 0) return;

  
  const str = changeFirstAndLastLetterOfStr(inputString);

  let result = "";
  let charcode = 0;

  for (let i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + repeatCount;
    result += String.fromCharCode(charcode);
  }
}

const changeFirstAndLastLetterOfStr = (str = "") => {
  const firstItemIndex = 0;
  const lastItemIndex = str.length - 1;

  const lettersList = Array.from(new Set(str.split("")));

  let firstLetter = lettersList[firstItemIndex];
  let lastLetter = lettersList[lastItemIndex];
  lettersList[firstItemIndex] = lastLetter;
  lettersList[lastItemIndex] = firstLetter;

  const res = lettersList.reduce(function (total, curr) {
    return (total += curr);
  });

  return res;
};
