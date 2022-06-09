function calculadora(){
    const OPERACAO = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!OPERACAO || OPERACAO >= 7){ //Validação se foi inserido uma das opções válidas.
        alert('Erro - Operação Inválida!!!');
        calculadora()
    } else {

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2){ //Validação se os valores das operações aritiméticas são válidos
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        } else {
            function soma(){ 
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} pra ${n2} é igual á ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual á ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
            let opcao = Number(prompt('Deseja realizar uma nova operação?\n1 - Sim!\n2 - Não!'));

            if (opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até mais, volte sempre!');
            } else {
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }
            // Solução com if/else para alternativas
            // if (OPERACAO == 1) {
            //     soma();
            // } else if (OPERACAO == 2) {
            //     subtracao();
            // } else if (OPERACAO == 3){
            //     multiplicacao();
            // } else if (OPERACAO == 4){
            //     divisao();
            // } else if (OPERACAO == 5){
            //     divisaoInteira();
            // } else if (OPERACAO == 6){
            //     potenciacao();
            // }

            //Solução com switch case
            switch(OPERACAO){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora()