let arr = [
    [0, 'M', 0, 'M', 0],
    [0, 0, 'M', 0, 0],
    [0, 0, 0, 0, 0],
    ['M', 'M', 0, 0, 0],
    [0, 0, 0, 'M', 0]
];
let size_rows = arr.length;
let size_columns = arr[0].length;
let matrix_res = [];
for (let i = 0; i < size_rows; i++) {
    matrix_res[i] = [];
    for (let j = 0; j < size_columns; j++) {
        matrix_res[i][j] = 0;
    }
}

for (let i = 0; i < size_rows; i++) {
    for (let j = 0; j < size_columns; j++) {
        if (arr[i][j] === 'M') {
            matrix_res[i][j] = arr[i][j];
            if (i + 1 < size_rows && arr[i+1][j] === 0) (matrix_res[i+1][j] += 1);
            if (j + 1 < size_columns && arr[i][j+1] === 0) (matrix_res[i][j+1] += 1);
            if (i + 1 < size_rows && j + 1 < size_columns && arr[i+1][j+1] === 0) (matrix_res[i+1][j+1] += 1);
        }
    }
}
console.log(matrix_res);