module.exports = function towelSort (matrix) {
    let arr = matrix;
    if (arr == null){
        return []
    } else {
        return arr.reduce((a, b, i) => a.concat(i % 2 === 0 ? b : b.reverse()), []);
    }
}
