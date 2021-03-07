const inquirer = require('inquirer');

const OPERACOES = require('./operacoes');

const escolherNUM = require('./escolherNUM');




inquirer.prompt(escolherNUM).then(CALCULAR =>{

    if (CALCULAR.operador == 0){
        console.log('O resultado é: '+ OPERACOES.somar(CALCULAR.valor1,CALCULAR.valor2))
    }
    else if (CALCULAR.operador == 1){
        console.log('O resultado é: '+ OPERACOES.subtrair(CALCULAR.valor1,CALCULAR.valor2))
    }
    else if (CALCULAR.operador == 2){
        console.log('O resultado é: '+ OPERACOES.multiplicar(CALCULAR.valor1,CALCULAR.valor2))
    }
    else if (CALCULAR.operador == 3){
        console.log('O resultado é: '+ OPERACOES.dividir(CALCULAR.valor1,CALCULAR.valor2))
    };
});