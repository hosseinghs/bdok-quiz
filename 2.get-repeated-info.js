function getRepeatedInfo(num) {
  const list = num.toString().split("");
  const res = new Object();

  for (let i = 0; i < list.length; i++) {
    let counter = list[i];
    let temp = [];
    while (counter != 0) {
      temp.push(list[i]);
      counter--;
    }

    res[list[i]] = temp.join("");
    return res;
  }
}
