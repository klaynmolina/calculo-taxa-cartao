let campoCartao = document.getElementById("campoCartao");
let calcular = document.getElementById("calcular");

function taxa() {
    const campoDinheiro = document.querySelector("#campoDinheiro");

    const valor = parseFloat(campoDinheiro.value);
    
    let calculo = valor + (valor * 0.10);

    campoCartao.innerHTML = `R$ ${calculo.toFixed(2)}`;
}

calcular.addEventListener('click', taxa);
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        taxa();
    }
});