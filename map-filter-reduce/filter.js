function filtraPares(arr) {
    return arr.filter(impar) 
}

function par(item){
    return item % 2 === 0;
}

function impar(item){
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));
