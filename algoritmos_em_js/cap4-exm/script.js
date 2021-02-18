function enviar(){
    let fnome = document.getElementById('txtnome')
    let nome = fnome.value

    if(fnome.value.length == 0){
        window.alert('[ERRO] Digite seu nome para prosseguir!')
    } else{
        let fsex = document.getElementsByName('radsex')
        let res = document.getElementById('res')
        let genero = ''

        if(fsex[0].checked){
            genero = 'femenino'
            res.innerHTML = `Seu nome é ${nome} e seu gênero é ${genero}` 
        } else{
            genero = 'masculino'
            res.innerHTML = `Seu nome é ${nome} e seu gênero é ${genero}.`
        }
    }
}