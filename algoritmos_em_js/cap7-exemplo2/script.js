function executar(){
    var nome = []

    for(var i = 0; i < 5; i++){
        nome.push(window.prompt('Digite um nome aqui: '))
    }

    do{
        var pesquisa = window.prompt('Qual nome você deseja pesquisar: ')

        var i = 0
        var acha = false

        while(i < 5 && acha == false){
            if(pesquisa == nome[i]){
                acha = true
            } else{
                i++
            }
        }

        if(acha == true){
            window.alert(`${pesquisa} foi encontrada na posição ${i}`)
        } else{
            window.alert(`${pesquisa} não foi encontrada`)
        }

       var pergUsu = window.prompt('Você deseja continuar: ')

    } while(pergUsu == 'sim')
}