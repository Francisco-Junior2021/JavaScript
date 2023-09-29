const celsiusInput = document.getElementById('celsius');
const tempFahrenheitSpan = document.getElementById('temp-fahrenheit');
const tempKelvinSpan = document.getElementById('temp-kelvin');
const errorMessage = document.getElementById('error-message');

celsiusInput.addEventListener('keyup', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (isNaN(celsiusValue)) {
        errorMessage.textContent = 'Por favor, digite um valor numérico.';
        tempFahrenheitSpan.textContent = '-';
        tempKelvinSpan.textContent = '-';
    } else {
        errorMessage.textContent = '';
        const fahrenheitValue = converterFahrenheit(celsiusValue);
        const kelvinValue = converterKelvin(celsiusValue);
        tempFahrenheitSpan.textContent = fahrenheitValue.toFixed(2);
        tempKelvinSpan.textContent = kelvinValue.toFixed(2);
    }
});

function converterFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function converterKelvin(celsius) {
    return celsius + 273.15;
}