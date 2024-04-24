const frm = document.querySelector('form')
const msg = document.querySelector('h3')

confirm('AVISO IMPORTANTE:\nAbaixo você tera que selecionar uma das 2 opções HORAS / MINUTOS:\nCaso venha a selecionar Horas você estara convertendo Horas em minutos e caso selecione minutos ira converte em horas ')

frm.addEventListener('submit',(e) => {
    const tempo = Number(frm.tempos.value)
    const selecao = frm.selecaoHoras.checked

    let resultado


    if (selecao) {
        resultado = 60 * tempo
        msg.innerText = `${resultado} Minutos`
    } else {

        resultado = 60 / tempo
        msg.innerText = `${resultado} Horas`
    }

    e.preventDefault()
})