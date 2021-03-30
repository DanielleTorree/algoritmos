function executar(){
    var nome = ["Thaiane", "Danielle", "Alex", "Jackson", "Cicera"]

    for(var i = 0; i < 5; i++){
        if(i == 0){
            nome.push(window.prompt("Digite um nome: "))
        } else{
            nome.push(window.prompt("Digite outro nome: "))
        }
    }

    for(var i = 0; i < 5; i++){
        var guardaNome = '' 

        for(var j = i + 1; j < 5; j++){

            if(nome[i] > nome[j]){
                
                guardaNome = nome[i]
                nome[i] = nome[j] 
                nome[j] = guardaNome

            }
        }

        console.log(nome[i])
    }
}