const data = [
    {
        name: 'Jogo na steam',
        valor: 25.65,
        tipo: 'gasto',
    },
    {
        name: 'Salário',
        valor: 3120,
        tipo: 'ganho',
    },
    {
        name: 'Ifood',
        valor: 80.15,
        tipo: 'gasto',
    },
    {
        name: 'Presente',
        valor: 125,
        tipo: 'gasto',
    },
]

const geral = document.querySelector('.main_historico-geral_list')
const gastos = document.querySelector('.main_historico-gastos_list')
const ganhos = document.querySelector('.main_historico-ganhos_list')
const saldo = document.getElementById('saldo')
const buttonSalvar = document.getElementById('saveChanges')

buttonSalvar.addEventListener('click',(e)=>{
    const name = document.getElementById('newitem_name');
    const value = document.getElementById('newitem_value')
    const type = document.getElementById('newitem_type')

    const valueN = +value.value;
    console.log(type.value)
    data.push({
        name: name.value,
        valor: valueN,
        tipo: type.value
    })

    refreshData();
})

function refreshData(){
    let saldoSoma = 0;

    geral.innerHTML = '';
    gastos.innerHTML = '';
    ganhos.innerHTML = '';
    saldo.innerHTML = ''

    data.forEach(itemAtual=>{
       

        const novoItemLista = document.createElement('li')
        novoItemLista.classList.add('item_lista')
        const nomeItem = document.createElement('p')
        nomeItem.innerHTML = itemAtual.name
       
        const valor = document.createElement('p')
        valor.innerHTML = itemAtual.valor
        novoItemLista.appendChild(nomeItem)
        novoItemLista.appendChild(valor)
        geral.appendChild(novoItemLista)
    
        if(itemAtual.tipo == 'ganho'){
            saldoSoma += itemAtual.valor;
            valor.classList.add('item_ganho')
            valor.insertAdjacentHTML('afterBegin', 'R$ ')
            ganhos.appendChild(novoItemLista.cloneNode(true))
        }
    
        if(itemAtual.tipo == 'gasto'){
            saldoSoma -= itemAtual.valor;
            valor.classList.add('item_gasto')
            valor.insertAdjacentHTML('afterBegin', '-R$ ')
            gastos.appendChild(novoItemLista.cloneNode(true))
        }
    })

    saldo.innerHTML = `R$ ${saldoSoma.toFixed(2)}`
}

refreshData();
