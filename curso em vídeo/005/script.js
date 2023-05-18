function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (nascimento > ano || nascimento.value.length == 0){
        window.alert('[ERRO] Revise os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
        } else {
            genero = 'feminino'
        }

        res.innerHTML = `Idade calculada: Você tem ${idade} anos, e seu sexo é ${genero}.`
    }
    
}