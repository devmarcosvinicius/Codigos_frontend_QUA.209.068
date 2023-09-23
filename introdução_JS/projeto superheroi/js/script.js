let dados = []

const crudForm = document.getElementById('crud-form')
const nomeInput = document.getElementById('nome')
const emailInput = document.getElementById('email')
const editIndexInput = document.getElementById('edit-index')

// Listagem dos dados
const listarDados = document.getElementById('listar-dados')

// Função para adicionar / editar os dados
function adicionarEditarDados(event) {
    event.preventDefault()

    const nome = nomeInput.value
    const email = emailInput.value
    const editIndex = parseInt(editIndexInput.value)

    if (nome && email) {
        if (editIndex === -1) {
            const novoDado = { nome, email }
            dados.push(novoDado)
        } else {
            dados[editIndex] = { nome, email }
        }

        exibirDados()
        limparFormulario()
    }
}

// Função para editar os dados
function editarDado(index) {
    const dado = dados[index]
    nomeInput.value = dado.nome
    emailInput.value = dado.email
    editIndexInput.value = index
}

// Função de remover os dados
function removerDado(index) {
    dados.splice(index, 1)
    exibirDados()
}

// Função para limpar o formulario
function limparFormulario() {
    nomeInput.value = ''
    emailInput.value = ''
    editIndexInput.value = -1
}

// Adicionar evento de envio do formulario
crudForm.addEventListener('submit', adicionarEditarDados)

// Exibir dados iniciais
function exibirDados() {
    listarDados.innerHTML = ''

    dados.forEach((dado, index) => {
        const listItem = document.createElement('li')
        listItem.innerHTML =
            `
        ${dado.nome} - ${dado.email}
        <button class="btn btn-primary btn-sm float-end" onclick="editarDado(${index})">Editar</button>
        <button class="btn btn-danger btn-sm float-end" onclick="removerDado(${index})">Remover</button>
        `
        listarDados.appendChild(listItem)
    })
}

// Chamando a função
exibirDados()