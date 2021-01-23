function calcular(){
    var fsm = document.getElementById('txtsm')
    var fpr = document.getElementById('txtpr')

    var res = document.getElementById('res')

    if(fsm.value.length == 0 || fpr.value.length == 0 || Number(fsm.value) <= 0 || Number(fpr.value) <= 0){
        window.alert('[ERRO] Tente novamente para prosseguir!')
    } else{
        var sm = Number(fsm.value)
        var pr = Number(fpr.value)

        var ns = sm + (sm*(pr/100))
        
        res.innerHTML = `Novo salário: ${ns.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    }
}