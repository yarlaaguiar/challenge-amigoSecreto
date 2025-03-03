//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome.trim() !== "") {
        amigos.push(nome);

        atualizarListaDeAmigos();
        document.getElementById('amigo').value = "";
    } else {
        alert('Por favor, digite um nome válido!');
    }
}
function atualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    alert(`Amigo sorteado: ${amigoSorteado}`);
}
