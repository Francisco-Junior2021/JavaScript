function calcularMelhorCombustivel() {
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const alcool = parseFloat(document.getElementById('alcool').value);

    if (isNaN(gasolina) || isNaN(alcool)) {
        alert('Por favor, insira valores válidos para gasolina e álcool.');
        return;
    }

    const melhorCombustivel = gasolina / alcool;

    if (melhorCombustivel < 0.7) {
        document.getElementById('resultado').textContent = 'Melhor abastecer com Gasolina.';
    } else {
        document.getElementById('resultado').textContent = 'Melhor abastecer com Álcool.';
    }
}
