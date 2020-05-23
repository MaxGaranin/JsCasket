/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  if (A.length === 0 || B.length === 0) return [];

  const result = [];
  let a1, a2, b1, b2;
  let maxL, minR;

  let i = 0;
  let j = 0;
  a1 = A[i][0];
  a2 = A[i][1];
  b1 = B[j][0];
  b2 = B[j][1];
  while (true) {
    maxL = Math.max(a1, b1);
    minR = Math.min(a2, b2);
    if (maxL <= minR) {
      result.push([maxL, minR]);
    }

    if (a2 <= b2) {
      i++;
      if (i >= A.length) return result;
      a1 = A[i][0];
      a2 = A[i][1];
    } else {
      j++;
      if (j >= B.length) return result;
      b1 = B[j][0];
      b2 = B[j][1];
    }
  }
};

// Input: A = [[0,2],[5,10],[13,23],[24,25]],
//        B = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
let A = [[0,2],[5,10],[13,23],[24,25]];
let B = [[1,5],[8,12],[15,24],[25,26]];
let result = intervalIntersection(A, B);
console.log(result);
