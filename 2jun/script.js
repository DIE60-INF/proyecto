// Encontramos los elementos en nuestra página por su "id"
const pesoInput = document.getElementById('pesoInput');
const alturaInput = document.getElementById('alturaInput');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoP = document.getElementById('resultado'); // Usamos 'resultadoP' para el párrafo

// Cuando se hace clic en el botón, llamamos a la función "calcularIMC"
calcularBtn.addEventListener('click', function() {
    // Obtenemos los valores de peso y altura de los campos
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Si los números no son válidos (ej. están vacíos o no son números)
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoP.textContent = 'Por favor, introduce números válidos para peso y altura.';
        return; // Detenemos la función aquí
    }

    // Calculamos el IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);

    // Mostramos el resultado, redondeado a 2 decimales
    resultadoP.textContent = 'Tu IMC es: ' + imc.toFixed(2);
});