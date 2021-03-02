function executar(){
    var soma = 0
    var n = []
    var res = window.document.getElementById('res')

    //4.5, 6.5, 8, 3.5, 6, 6.5, 6.5, 6

    for(var i = 0; i <= 7; i++){
        n.push( window.prompt('Digite a média do aluno: '))
        

        soma = soma + Number(n[i])
        console.log(soma)
    }

    var media = soma / 8
    
    window.alert(`Esta é a média: ${media}`)
}