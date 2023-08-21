let estoque = [];

carregarProdutosLS()

function cadastrarProduto() {
    if(localStorage.meuEstoque){
        estoque = JSON.parse(localStorage.getItem('meuEstoque'))
    }

    const codigo = document.getElementById('codigo').value;
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    const objeto = {
        codigo: codigo,
        produto: produto,
        quantidade: quantidade,
        preco: preco,
        total: (quantidade * preco)
    }

    estoque.push(objeto)
    localStorage.meuEstoque = JSON.stringify(estoque);

    criarLinhaTabela()

    document.getElementById('codigo').value = ''
    document.getElementById('produto').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('preco').value = ''

}

function criarLinhaTabela() {   

    const ultimoOBJ = estoque.at(-1)

    const table = document.getElementById('table')
    const tr = document.createElement('tr')

    table.appendChild(tr)

    for (const prop in ultimoOBJ) {
        const td = document.createElement('td')
        td.innerHTML = ultimoOBJ[prop]
        tr.appendChild(td)
    }
}

function carregarProdutosLS() {
    if(localStorage.meuEstoque){
        estoque = JSON.parse(localStorage.getItem('meuEstoque'))
    }

   estoque.forEach((objeto) => {
    const table = document.getElementById('table')
    const tr = document.createElement('tr')

    table.appendChild(tr)    

    for (const prop in objeto) {
        const td = document.createElement('td')
        td.innerHTML = objeto[prop]
        tr.appendChild(td)
    }

  })
}

function apagarObjetoLS() {

    const posicao = document.getElementById('posicao').value

    estoque.splice(posicao, 1)

    localStorage.meuEstoque = JSON.stringify(estoque);

    document.getElementById('posicao').value = ''    

    window.location.reload()

    carregarProdutosLS()
}