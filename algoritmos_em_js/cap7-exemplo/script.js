function executar(){
    var nome = []
    var x = ''

    for(var i = 0; i < 5; i++){
        nome.push(window.prompt('Digite um nome aqui: '))
    }

    for(var i = 0; i < 5; i++){
        if(nome[i] > nome[i+1]){
            x = nome[i]        
            nome[i] = nome[i+1]
            nome[i+1] = x
        }
    }
    
    console.log(nome)    
}