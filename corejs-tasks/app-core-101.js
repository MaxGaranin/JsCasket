function getMatrixProduct(m1, m2) {
  const result = [];

  for (let i = 0; i < m1.length; i += 1) {
    if (m1[i].length !== m2.length) {
      throw new Error('m1 rows size must be equals to m2 columns size');
    }

    result[i] = [];

    for (let j = 0; j < m2[i].length; j += 1) {
      result[i][j] = 0;

      for (let k = 0; k < m2.length; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}

const result = getMatrixProduct([[1, 2, 3]], [[4], [5], [6]]);
console.log(result);
