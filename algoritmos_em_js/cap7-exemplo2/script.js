function executar(){
    var nome = []

    for(var i = 0; i < 5; i++){
        nome.push(window.prompt('Digite um nome: '))
    }

    do{

        var pergNome = window.prompt('Qual nome deseja pesquisar?')
        
        var i = 0
        var achaNome = false
        //var achaNome = false ====> é uma variável flag (bandeira)

        while(i < 5 && achaNome == false){

            if(pergNome == nome[i]){
                achaNome = true
            } else{
                i++
            }
        }

        if(achaNome == true){
           window.alert(`O nome ${pergNome} foi encontrado na posição ${i}.`) 
        } else{
            window.alert(`O nome ${pergNome} não foi encontrado.`)
        }

        var perg = window.prompt('Deseja continuar? (SIM/NÃO):')
    
    }while(perg == 'sim' || perg == 'Sim' || perg == 'SIM')
}