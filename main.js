/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-livros': 'Gosto muito estudar e ler livros relacionados a mistérios policiais, Aghata Christie é minha autora favorita!',
    'interesse-serie': 'Assisto a filmes, documentarios e séries são minha paixão, aqui vai um top 3: Dexter, Breaking bad e HIMM',
    'interesse-aviao': 'Amo viagens de aventura, praia é o meu lugar favorito no mundo, minha meta é conhecer primeiro todas da america do sul e as demais mundo!',
    'interesse-piano': 'Adoro cantar e toco piano :)',
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

