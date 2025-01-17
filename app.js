//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//
let nomes_sorteados = [];

function adicionarAmigo(){
    let amigosInput = document.getElementById('amigo');
    let amigos = document.getElementById('amigo').value;
    if (amigos ==""){
        alert('Digite um nome válido!');
        return;
    }
   nomes_sorteados.push(amigos);
   amigosInput.value= "";
   atualiza_lista_amigos()
}

function atualiza_lista_amigos(){
    let quantidade = nomes_sorteados.length;
    let listaAmigos = document.querySelector('ul');
    listaAmigos.innerHTML = "";
    let x=0;
    while(x<quantidade){
        listaAmigos.innerHTML += `${nomes_sorteados[x]}<br>`;
        x++;
    }
    
    
}


function sortearAmigo()
{   
   
    let qtdd = nomes_sorteados.length;
    if (qtdd==0){
        alert("Não é possível sortear pois não há amigos!");
        return;
    }
    let sorteio = nomes_sorteados[parseInt(Math.random()*qtdd)];
    listaAmigos.innerHTML = `Seu amigo secreto é: <span style ="color:green;">${sorteio}<span>`;
    nomes_sorteados.splice(sorteio,1);
}

