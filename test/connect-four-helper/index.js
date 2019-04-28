const matrixA = [
  ['A', 'B', 'B', 'B'],
  ['B', 'A', 'B', 'B'],
  ['B', 'B', 'A', 'B'],
  ['B', 'B', 'B', 'A'],
];
const matrixAoffset = [
  ['A', 'B', 'C', 'C'],
  ['C', 'A', 'B', 'C'],
  ['C', 'C', 'A', 'B'],
  ['C', 'C', 'C', 'A'],
];
const matrixB = [
  ['B', 'B', 'B', 'A'],
  ['B', 'B', 'A', 'B'],
  ['B', 'A', 'B', 'B'],
  ['A', 'B', 'B', 'B'],
];
const matrixBoffset = [
  ['B', 'B', 'A', 'B'],
  ['B', 'A', 'B', 'B'],
  ['A', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B'],
];
const matrixBnegativeOffset = [
  ['B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'A'],
  ['B', 'B', 'A', 'B'],
  ['B', 'A', 'B', 'B'],
];

const realMatrix = [
  ['A', 0, 0, 0, 0, 0, 0],
  [0, 'A', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 'A', 0, 0, 0],
  ['A', 0, 0, 0, 0, 0, 0],
  ['A', 0, 0, 0, 0, 0, 0],
]

module.exports = {
  matrixA,
  matrixAoffset,
  matrixB,
  matrixBoffset,
  matrixBnegativeOffset,
  realMatrix
}
