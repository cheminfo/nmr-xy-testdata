function xRange(start, end, nbPoints) {
  let array = new Array(nbPoints).fill(start);
  let delta = (end - start) / (nbPoints - 1);
  for (let i = 0; i < nbPoints; i++) {
    array[i] += delta * i;
  }
  return array;
}

module.exports = xRange;
