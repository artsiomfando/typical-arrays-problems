
exports.min = function min (array) {
  if (array == [] || array == undefined) {
        return 0;
    } else {
        return array.reduce((acc, cur) => (acc < cur ? acc : (acc = cur)), 0);
    }
}

exports.max = function max (array) {
 if (array == [] || array == undefined) {
        return 0;
    } else {
        return array.reduce((acc, cur) => (acc < cur ? (acc = cur) : acc), 0);
    }
}

exports.avg = function avg (array) {
 if (array == [] || array == undefined) {
        return 0;
    } else {
        const result = array.reduce((acc, cur) => acc + cur / array.length, 0);
        return Math.round(result * 100) / 100;
    }
}
