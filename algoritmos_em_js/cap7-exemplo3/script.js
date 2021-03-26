function executar(){
    var nome = []

    for(var i = 0; i < 5; i++){
        nome.push(window.prompt('Digite um nome: '))
    }

    for(var i = 0; i < nome.length; i++){
        var min = i

        for(var j = i + 1; j < nome.length; j++){

            if(nome[min] > nome[j]){
                min = j
            }
        }
            
        var temp = nome[i]
        nome[i] = nome[min]
        nome[min] = temp
    }

    do{
        var pergNome = window.prompt('Qual nome você deseja encontrar? ')

        var inicio = 1
        var fim =  5
        var meio = (inicio + fim)/2
        var achaNome = false

        while(inicio <= fim && achaNome == false){
            if(pergNome == nome[parseInt(meio)]){
                achaNome = true
            } else if(pergNome  < nome[parseInt(meio)]){
                fim = meio - 1
            } else{
                fim = meio + 1
            }
        }

        if(achaNome == true){
            window.alert(`O nome ${perNome} foi localizafo na posição ${meio}`)
        } else{
            window.alert(`O nome ${pergNome} não foi localizado`)
        }

        var resp = window.prompt('Deseja continuar? [sim/não]')

    } while(resp == 'sim')
}