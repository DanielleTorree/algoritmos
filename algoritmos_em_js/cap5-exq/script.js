function executar(){

    var total = 0

    do{
        var nomeComodo = window.prompt('Qual o nome do seu cômodo? ')

        var largura = window.prompt('Qual a largura em metros do seu cômodo? ')

        var comprimento = window.prompt('Qual o comprimento em metros do seu cômodo? ')

        var area = largura*comprimento

        window.alert(`A área do cômodo ${nomeComodo} é ${area} m².`)

        var resposta = window.prompt('Quer continuar? ')

        total = total + area
    }while(resposta != 'Não')

    window.alert(`Área total dos seus cômodos é: ${total} m².`)
}