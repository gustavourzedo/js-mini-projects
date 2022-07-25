function validaArray(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Envie os Parâmetros corretos.");

        if (typeof arr !== 'object')
            throw new TypeError("Array precisa ser do tipo object");

        if (typeof num !== 'number')
            throw new TypeError("O número precisa ser do tipo number");

        if (arr.length !== num)
            throw new RangeError("O tamanho do array não corresponde ao número informado.");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)

        } else {
            console.log("Tipo de erro não esperado" + e);
        }
    }
}

console.log(validaArray()); // ReferenceError 
console.log(validaArray(5, 5)); // TypeError 1
console.log(validaArray([], 'a')); // TypeError 2
console.log(validaArray([], 5)); // RangerError 
console.log(validaArray([1, 2, 3, 4, 5], 5)); // No Error