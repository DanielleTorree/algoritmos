function executar(){
    var nome = ["Alex", "Beatriz", "Cicera", "Danielle", "Elaine", "Fabiana", "Giovana", "Heloisa", "Ingrid", "Julia"];

    do{
        var pergNome = window.prompt("Você deseja procurar qual nome? ");

        var comeco = 1;
        var final = 10;
        var achaNome = false;

        while(comeco <= final && achaNome == false){
            var meio = (comeco + final)/2;
            var meioNumInt = Math.floor(meio);

            console.log("começo " + comeco);
            console.log("final " + final);
            console.log("meio " + meioNumInt)
            
            if(pergNome  == nome[meioNumInt]){
                achaNome = true;
            } else if(pergNome < nome[meioNumInt]){
                final = meioNumInt - 1
            } else{
                comeco = meioNumInt + 1
            }
        }

        if(achaNome == true){
            window.alert(`O nome ${pergNome} foi encontrado no índice ${meioNumInt}!`)
        } else{
            window.alert(`O nome ${pergNome} não foi encontrado!`)
        }

        alert("ATENÇÃO!!!")
        var resposta = window.prompt("Você deseja continuar? [Sim/Não]")
    }while(resposta == "sim")

}