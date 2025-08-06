let nomes = []; 

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

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    
    const nomeSorteado = nomes[indiceSorteado];

    document.getElementById("resultado").innerHTML = `
        <h3>Nome sorteado:</h3>
        <p>${nomeSorteado}</p>
    `;
}

function reiniciar() {
    nomes = [];
    document.getElementById("listaNomes").innerHTML = "";
    document.getElementById("resultado").textContent = "";

}
