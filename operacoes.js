module.exports = 

    {   
        somar:(valor1,valor2) => valor1 + valor2,
        subtrair:(valor1, valor2) => valor1 - valor2,
        multiplicar:(valor1, valor2) => {
        
        if (valor1 == 0 || valor2 == 0 ){
        return 0; } else{
            return valor1 * valor2;
        };  } ,
    
       dividir:(valor1, valor2) => {
        
        if (valor1 == 0 || valor2 == 0 ){
        return 'Não se pode dividir por ZERO!!' ;} else{
            return valor1 / valor2;
        };  } ,
    };
    
      