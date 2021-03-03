function executar(){
    var soma = 0
    var n = []

    for(var i = 0; i <= 7; i++){
        n.push( window.prompt('Digite a média do aluno: '))
        
        //The push() method adds new items to the end of an array, and returns the new length.

        soma = soma + Number(n[i])
        console.log(soma)
    }

    var media = soma / 8
    
    window.alert(`Esta é a média: ${media}`)
}