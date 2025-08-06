function criaCartão(categoria, pergunta, resposta){
const container = document.getElementById('container')
const cartao = document.creaElement('article')
cartao.className = 'carrtao'

cartao.innerHTML = `<div class="cartao_conteudo">
                    <h3>${categoria}</h3>
                    <div class="pergunta">
                         ${pergunta}
                    </div>
                    <div class="resposta">
                         ${resposta}
                    </div>
                </div>´

                    container.appendChild (cartao)

}