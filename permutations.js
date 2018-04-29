const mutations = (input) => {
  if (input.length === 1) {
    return [input];
  }
  let res = [];
  const array = mutations(input.substr(1, input.length));
  array.forEach(s => {
    res = [...res, ...insertEverywhere(input[0], s)];
  });
  
  return res;
};

const insertEverywhere = (char, string) => {
  const arr = string.split``;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const temp = [...arr];
    temp.splice(i, 0, char);
    res.push(temp.join``);
  }
  res.push(`${string}${char}`);
  return res;
};
