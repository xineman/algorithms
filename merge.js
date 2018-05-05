const mergeSort = (arr, l, r) => {
  if (r > l) {
    const m = Math.floor((l + r) / 2);
    return merge(mergeSort(arr, l, m), mergeSort(arr, m + 1, r));
  }
  return [arr[l]];
}

const merge = (first, second) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      res.push(first[i++]);
    } else {
      res.push(second[j++]);
    }
  }
  while (i < first.length) {
    res.push(first[i++]);
  }
  while (j < second.length) {
    res.push(second[j++]);
  }
  return res;
}

module.exports = function(input) {
  return mergeSort(input, 0, input.length - 1);
}
