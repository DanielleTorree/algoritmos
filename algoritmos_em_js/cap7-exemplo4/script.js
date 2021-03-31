function executar(){
    var nome = ["Alex", "Breno", "Cicera", "Daniel", "Emanuel", "Fabiano", "George", "Henrique", "Ingrid", "Jorge"];

    
    do{
        var pergNome = window.prompt("Entre o nome a ser pesquisado: ");

        var i = 0;
        var achaNome = false;

        while(i <= 9  && achaNome == false){
            if(pergNome == nome[i]){
                achaNome = true;
            } else{
                i = i + 1
            }
        }

        if(achaNome == true){
            window.alert(`O nome ${pergNome} foi encontrado no índice ${i}!`)
        } else{
            window.alert(`O nome ${pergNome} não foi encontrado!`)
        }

        var resp = window.prompt("Deseja continuar? [sim/não]");
    } while(resp == "sim")
}