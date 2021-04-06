function executar(){
    var A = [];
    var B = [];

    for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? "Digite um número: " : "Digite outro número: "));
        A.push(numero);

        B.push(A[i]+2);
    }

    console.log(A);
    console.log(B);

    for(var i = 0; i < 8; i++){
        
        var x = 0;

        for(var j = i + 1; j < 8; j++){

            if(B[i] > B[j]){
                x = B[i];
                B[i] = B[j];
                B[j] = x;
            }

        }
    }
    
    console.log(B);

    do{
        var pergNum = Number(window.prompt("Entre o número a ser pesquisado: "));

        var achaNum = false;
        var comeco = 0;
        var final = 8;

        while(comeco <= final && (!achaNum)){
            var meio = parseInt((comeco + final)/2);

            if(pergNum == B[meio]){
                achaNum = true;
            } else if(pergNum > B[meio]){
                comeco = meio + 1;
            } else{
                final = meio - 1;
            }
        }

        if(achaNum){
            window.alert(`O número ${pergNum} foi encontrado na posição ${meio}`)
        } else{
            window.alert(`O número ${pergNum} não foi encontrado`)
        }

        var perg = window.prompt("Você deseja continuar? [sim/não]");
    } while(perg == "sim")

    console.log(B);
}