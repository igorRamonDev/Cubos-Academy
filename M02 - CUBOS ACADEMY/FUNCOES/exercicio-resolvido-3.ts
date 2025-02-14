type TFuncaoCalc = (numbero1: number, numbero2: number) => number;

type TCalculadora = {   
    soma: TFuncaoCalc;
    subtracao: TFuncaoCalc;
    multiplicacao: TFuncaoCalc;
    divisao: TFuncaoCalc;
}

const calculadora: TCalculadora = {

    soma: function (numero1: number, numero2: number): number {
        return numero1 + numero2;
    },

    subtracao: function (numero1: number, numero2: number): number{
        return numero1 - numero2;
    },

    multiplicacao: function (numero1: number, numero2: number): number{
        return numero1 * numero2;
    },

    divisao: function (numero1: number, numero2: number): number {
        return numero1 / numero2;

    }
}

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));
console.log(calculadora.multiplicacao(1, 2));  
console.log(calculadora.divisao(1, 2));


