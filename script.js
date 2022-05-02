   function calculateSalary(salario, comissao){
    let counter = 0
    let result = 0
        if(comissao <= 1200){
           result = (comissao / 100) * 3
        }
        if(comissao > 1200){
            counter = (comissao - 1200) / 100 * 5
    }
    return result + salario + counter
}


 function calculeStock(quantidadeAtual, quantidadeMax, quantidadeMin){
    let texto = ''
    let media = (quantidadeMax + quantidadeMin) / 2
    if(quantidadeAtual >= media){  
        texto += `Não efetuar compra`  
    }else{
        texto+= `Efetuar compra`
    }
    return texto
}
console.log(calculeStock(30, 50, 10)) 

  function calculateAge(anoNascimento, anoAtual){
    let anos = anoAtual - anoNascimento 
    let meses = 12 * anos
    let dias = 365 * anos
    let semanas = 52 * anos
    return `Idade em anos: ${anos}, idade em meses: ${meses},
    idade em dias ${dias}, idade em semanas: ${semanas}`
}
console.log(calculateAge(2002, 2022)) 

 function getDiagonal(matrizQuadrada){
    let arr = matrizQuadrada[0][0]
    let arr1 = matrizQuadrada[1][1]
    let arr2 = matrizQuadrada[2][2]
    return `${arr}, ${arr1}, ${arr2}`
}
console.log(getDiagonal([ 
    [1, 2, 3] , 
    [4, 5, 6] , 
    [7, 8, 9] ])) 
