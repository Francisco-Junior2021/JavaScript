const simularButton = document.getElementById('simularButton');
        const resultDiv = document.getElementById('result');

        simularButton.addEventListener('click', () => {
            const resultados = [0, 0, 0, 0, 0, 0]; 
            for (let i = 0; i < 1000000; i++) {
                const resultadoDoDado = Math.floor(Math.random() * 6) + 1; 
                resultados[resultadoDoDado - 1]++; 
            }

            resultDiv.innerHTML = `
                <p>O número 1 apareceu ${resultados[0]} vezes.</p>
                <p>O número 2 apareceu ${resultados[1]} vezes.</p>
                <p>O número 3 apareceu ${resultados[2]} vezes.</p>
                <p>O número 4 apareceu ${resultados[3]} vezes.</p>
                <p>O número 5 apareceu ${resultados[4]} vezes.</p>
                <p>O número 6 apareceu ${resultados[5]} vezes.</p>
            `;
        });