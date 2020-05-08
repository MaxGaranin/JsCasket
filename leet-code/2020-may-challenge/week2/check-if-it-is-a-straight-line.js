/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let p1 = coordinates[0];
  let p2 = coordinates[1];
  let angle1 = getAngle(p1, p2);
  for (let i = 2; i < coordinates.length; i++) {
    p1 = p2;
    p2 = coordinates[i];
    let angle2 = getAngle(p1, p2);
    if (angle1 !== angle2) return false;
  }
  return true;

  function getAngle(p1, p2) {
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
  }
};

let coords = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
let result = checkStraightLine(coords);
console.log(result);

coords = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];
result = checkStraightLine(coords);
console.log(result);
