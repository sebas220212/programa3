function contarCaracteres() {
    const input = document.getElementById('inputTexto');
    const contador = document.getElementById('contador');
    const cantidadCaracteres = input.value.length;
    contador.textContent = `Caracteres: ${cantidadCaracteres}`;
}
