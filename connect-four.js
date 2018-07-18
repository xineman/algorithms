function whoIsWinner(piecesPositionList){
  const result = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
  };
  for (let i = 0; i < piecesPositionList.length; i++) {
    const splitted = piecesPositionList[i].split('_');
    result[splitted[0]].push(splitted[1]);
    const res = validate(result);
    if (res) {
      return res;
    }
  }
  return 'Draw';
}

// check if given state is final. If it is - return result, else - null
function validate(result) {
  const keys = Object.keys(result);
  for (let i = 0; i < keys.length; i++) {
    const res = checkList(result[keys[i]]);
    if (res) {
      return res;
    }
  }
  for (let i = 0; i < 6; i++) {
    const res = checkList(getRow(result, i));
    if (res) {
      return res;
    }
  }
  const resultArray = keys.map(k => result[k]);
  for (let i = -resultArray.length; i < resultArray.length; i++) {
    let res = checkList(getDiagonal(resultArray, i));
    if (res) {
      return res;
    }
    res = checkList(getReverseDiagonal(resultArray, i));
    if (res) {
      return res;
    }
  }
  return null;
}

// get row from game state at given index
function getRow(obj, index) {
  const res = [];
  Object.keys(obj).forEach((k) => {
    res.push(obj[k][index]);
  });
  return res;
}

// get main diagonal with given offset by X axis
function getDiagonal(matrix, offset = 0) {
  const diagonal = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] && matrix[i][i + offset]) {
      diagonal.push(matrix[i][i + offset])
    } else {
      diagonal.push(null);
    }
  }
  return diagonal;
}

// get side diagonal with given offset by X axis
function getReverseDiagonal(matrix, offset = 0) {
  const diagonal = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] && matrix[i][matrix.length - 1 - i - offset]) {
      diagonal.push(matrix[i][matrix.length - 1 - i - offset]);
    } else {
      diagonal.push(null);
    }
  }
  return diagonal;
}

// check if given list contains 4 same items in a row
function checkList(list) {
  if (list.length < 4) {
    return false;
  }
  for (let i = 0; i < list.length - 3; i++) {
    let count = 1;
    for (j = i + 1; j < i + 4; j++) {
      if (list[i] !== list[j]) {
        break;
      }
      count++;
    }
    if (count === 4) {
      return list[i];
    }
  }
  return false;
}
