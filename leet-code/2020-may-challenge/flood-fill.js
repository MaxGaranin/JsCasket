/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (color === newColor) return image;

  processPixels([{ i: sr, j: sc }]);
  return image;

  function processPixels(coords) {
    let newCoords = [];
    for (const coord of coords) {
      processPixel(coord, newCoords);
    }
    if (newCoords.length === 0) return;
    processPixels(newCoords);
  }

  function processPixel(coord, newCoords) {
    const { i, j } = coord;
    image[i][j] = newColor;

    addPixel(i + 1, j, newCoords);
    addPixel(i - 1, j, newCoords);
    addPixel(i, j + 1, newCoords);
    addPixel(i, j - 1, newCoords);
  }

  function addPixel(i, j, newCoords) {
    if (image[i] && image[i][j] === color) {
      newCoords.push({ i, j });
    }
  }
};

const a = 0;
if (a) {
  console.log("a");
}

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1,
  sc = 1,
  newColor = 2;
const result = floodFill(image, sr, sc, newColor);
console.log(result);
console.log(result);
