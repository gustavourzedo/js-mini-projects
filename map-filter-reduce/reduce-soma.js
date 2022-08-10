function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const arr = [1, 2, 4, 7, 5, 9];

console.log(somaNumeros(arr));