function executar(){
    var A = [];
    var B = [];

    for(var i = 0; i < 5; i++){
        var numero = Number(window.prompt(i == 0 ? 'Digite um número para a matriz A': 'Digite outro número para a matriz A'));
        A.push(numero);
        B.push(A[i]**3);
    }

    console.log(A);
    console.log(B);

    do{
        var pergNum = Number(window.prompt('Entre o valor a ser pesquisado: '));
        
        var achaNum = false;
        var i = 0;

        //(!achaNum == não acha número)

        while((!achaNum) && i < B.length - 1){    
            if(pergNum == B[i]){
                achaNum = true;
            } else{
                i++
            }
        }

        if(achaNum == true){
            window.alert(`Número ${pergNum} encontrado na posição ${i}`)
        } else{
            window.alert(`Número ${pergNum} não encontrado`)
        }

        var perg = window.prompt("Você deseja continuar? [sim/não] ");
    } while(perg == 'sim')

}