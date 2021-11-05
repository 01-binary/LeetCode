var highestPeak = function (isWater) {
  let queue = [];
  let m = isWater.length;
  let n = isWater[0].length;

  let arr = Array(isWater.length);
  for (let i = 0; i < m; i++) {
    arr[i] = Array(n).fill(-1);
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        queue.push([i, j]);
        arr[i][j] = 0;
      } else {
        arr[i][j] = -1;
      }
    }
  }
  let coordinates = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let i = 0;
  while (i < queue.length) {
    let [y, x] = queue[i];
    for (let coordinate of coordinates) {
      let y_diff = y + coordinate[0];
      let x_diff = x + coordinate[1];
      if (
        y_diff < 0 ||
        x_diff < 0 ||
        y_diff >= m ||
        x_diff >= n ||
        arr[y_diff][x_diff] != -1
      ) {
        continue;
      }
      arr[y_diff][x_diff] = arr[y][x] + 1;
      queue.push([y_diff, x_diff]);
    }
    i++;
  }
  return arr;
};
