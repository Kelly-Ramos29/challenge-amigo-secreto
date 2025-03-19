//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

let sorteados= []

let indiceAtual = 0;

function adicionarAmigo(){
    const input = document.getElementById('amigo')
    let nome = input.value.trim();
    console.clear()
    input.value = "";

    if(nome === " " || !isNaN(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    (lista.innerHTML = ""),

    amigos.forEach((amigo,index) => {
        const li = document.createElement("li")
        li.textContent = amigo + (index < amigos.length - 1 ? ', ' : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.lenght === 0) {
        alert('A lista de amigos se encontra vazia!')
        return;
    }
   
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "O amigo sorteado foi: " + sorteados ;

    sorteados = [];
    atualizarLista();
  
    
    }

    function limparLista() {
        let limparLista = document.getElementById("listaAmigos");
        limparLista.innerHTML = "";
        amigos = [];
       

    }
    

       

    
    
    

