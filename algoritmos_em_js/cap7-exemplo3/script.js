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
    -
    console.log(nome)
}