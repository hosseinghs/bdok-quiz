export function operations(ops) {
  const numbers = [];
  const opsList = ops.split(" ");

  opsList.map((op) => {
    if (Number(op)) numbers.push(+op);
  });

  switch (ops) {
    case opsList.includes("+"):
      add(numbers);
      break;
    case opsList.includes("R"):
      removeLastItem(numbers);
      break;
    case opsList.includes("R"):
      double(numbers);
      break;
  }
}

const removeLastItem = (arr) => {
  if (arr.length === 0) return;
  const list = arr;
  const lastItem = findLastItemFromAnArray(list);
  const lastItemIndex = arr.indexOf(lastItem);
  arr.splice(lastItemIndex, 1);
  return arr;
};

const double = (arr) => {
  if (arr.length === 0) return;
  const list = arr;
  const lastItem = findLastItemFromAnArray(list);
  return list.push(lastItem * 2);
};

const add = (arr) => {
  if (arr.length >= 2) {
    const list = arr;
    const sum = list.reduce((total, curr) => (total += +curr), 0);
    list.push(sum);
    return arr;
  }
};

const findLastItemFromAnArray = (arr) => arr[arr.length - 1];
