export function removerRepetitive(str) {
  if (!str || str.length === 0) return;
  const uniqLetters = Array.from(new Set(str.split("")));
  const res = uniqLetters.reduce(function (total, curr) {
    return (total += curr);
  });
  return res;
}
