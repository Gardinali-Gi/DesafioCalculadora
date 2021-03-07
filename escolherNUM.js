const CALCULAR =[
    {
        type:'number',
        name: 'valor1',
        message:'Calculadora!! Digite o 1º número da operação',


    },
    {
        type:'number',
        name: 'valor2',
        message:'Calculadora!! Digite o 2º número da operação',


    },
    {
        type:'list',
        name:'operador',
        message:'Escolha o operação do calculo!',
        choices:[
            {
                name:'Somar' ,
                value: 0,
            },
            {
                name:'Subtrair' ,
                value: 1,
            },
            {
                name:'Multiplicar' ,
                value: 2,
            },
            {
                name:'Dividir' ,
                value: 3,
            },
        ]
    }
];


module.exports= CALCULAR;
    ;