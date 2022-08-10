const lista = [
    {
        name: 'Sabão em pó',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 17,
    },
    {
        name: 'Toalha',
        preco: 30,
    },
    {
        name: 'Caderno',
        preco: 25,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista))