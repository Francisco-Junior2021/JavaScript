const gerarNumero = function(){
    let numero = parseInt(100*Math.random());
    return numero;
}
let botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    let numero = gerarNumero();
    console.log(numero);
    let lista = document.querySelector("ul");
    let itemLista = document.createElement("li");
    lista.appendChild(itemLista);
    itemLista.textContent = numero;
});
