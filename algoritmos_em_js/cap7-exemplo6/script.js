function executar(){
    var nome = []; 

    for(var i = 0; i < 5; i++){
        if(i == 0){
            nome.push(window.prompt('Digite um nome: '));
        } else{
            nome.push(window.prompt('Digite outro nome: '));
        }
    }

    do{
        var pergNome = window.prompt('Entre o nome a ser pesquisado: ');
        var i = 0;
        var achaNome = false;

        while(i < 5 && achaNome == false){

            if(pergNome == nome[i]){
                achaNome = true;
            } else{
                i++   
            }
        }

        if(achaNome == true){
            window.alert(`O nome ${pergNome} foi encontrado na posição ${i}!`);
        } else{
            window.alert(`O nome ${pergNome} não foi localizado!`);
        }

        var perg = window.prompt('Quer continuar? [sim/não]');
    } while(perg == 'sim')

}


