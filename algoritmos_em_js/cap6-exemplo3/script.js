function executar(){
    var res = document.getElementById('res')
    
    var array = []
    var tamanhoArray = window.prompt('Quantos valores você quer colocar no array?')

    var soma = 0

    for(var i = 0; i <= tamanhoArray - 1; i++){
        array.push(window.prompt('Digite um número: '))

        if(Number(array[i])%2==0){
            soma = soma + Number(array[i])
        }
    }

    res.innerHTML = `Soma dos números pares = ${soma}`
}