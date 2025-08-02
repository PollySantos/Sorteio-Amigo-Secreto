let nomes = []; // Lista de nomes inseridos

// Função para adicionar nome à lista
function adicionarNome() {
    const input = document.getElementById("nome");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi inserido.");
        return;
    }

    nomes.push(nome);
    input.value = "";
    mostrarNomes();
}

// Função para exibir os nomes na lista
function mostrarNomes() {
    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        li.classList.add("nome-item");
        lista.appendChild(li);
    });
}

// Função para sortear apenas um nome da lista
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }

    // Gera um índice aleatório baseado no tamanho da lista
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    
    // Pega o nome correspondente ao índice sorteado
    const nomeSorteado = nomes[indiceSorteado];

    // Exibe o resultado do sorteio
    document.getElementById("resultado").innerHTML = `
        <h3>Nome sorteado:</h3>
        <p>${nomeSorteado}</p>
    `;
}

// Função para reiniciar o sistema
function reiniciar() {
    nomes = [];
    document.getElementById("listaNomes").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}