function executar(){
    var A = [];
    var B = [];
    var C = [];

    for(var i = 0; i < 5; i++){
        if(i == 0){
            A.push(parseInt(window.prompt("Digite um número para A: ")));
        } else{
            A.push(parseInt(window.prompt("Digite outro número para A: ")));
        }
    }
    
    for(var i = 0; i < 5; i++){
        if(i == 0){
            B.push(parseInt(window.prompt("Digite um número para B: ")));
        } else{
            B.push(parseInt(window.prompt("Digite outro número para B: ")));
        }
    }

    for(var i = 0; i < 5; i++){
        C.push(A[i] - B[i]);
    }

    do{
        window.alert("Lembre-se que o número a ser pesquisado será A[i] - B[i]. Observação: i ==> indica o índice da posição do elemento!")
        
        var pergNum = window.prompt("Entre o número a ser pesquisado: ");
        var achaNum = false;
        var i = 0;

        while(i < 5 && achaNum == false){
            if(pergNum ==  C[i]){
                achaNum = true;
            } else{
                i++
            }
        }

        if(achaNum == true){
            window.alert(`O número ${pergNum} foi encontrado na posição ${i}`)
        } else{
            window.alert(`O número ${pergNum} não foi encontrado`)
        }

        var perg = window.prompt("Deseja continuar? [Sim/Não]");
    } while(perg == "sim" || perg == "Sim")

    console.log(A);
    console.log(B);
    console.log(C);
}