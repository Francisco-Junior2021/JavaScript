// Função para calcular a potência usando Math.pow()
const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

// Ouvinte de evento para o botão "Calcular"
document.getElementById("calcularBtn").addEventListener("click", () => {
    const base = parseFloat(document.getElementById("base").value);
    const expoente = parseFloat(document.getElementById("expoente").value);

    if (!isNaN(base) && !isNaN(expoente)) {
        const resultado = calcularPotencia(base, expoente);
        document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para base e expoente.";
    }
});