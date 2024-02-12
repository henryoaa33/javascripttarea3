function convertirKmAMetros() {
    var km = parseFloat(document.getElementById('km').value);

    if (isNaN(km)) {
        alert('Por favor, ingrese un valor numérico para los kilómetros.');
        return;
    }

    var metros = km * 1000;
    mostrarResultado(metros, 'metros');
}

function convertirMetrosACentimetros() {
    var metros = parseFloat(document.getElementById('m').value);

    if (isNaN(metros)) {
        alert('Por favor, ingrese un valor numérico para los metros.');
        return;
    }

    var centimetros = metros * 100;
    mostrarResultado(centimetros, 'centímetros');
}

function convertirPiesAPulgadas() {
    var pies = parseFloat(document.getElementById('ft').value);

    if (isNaN(pies)) {
        alert('Por favor, ingrese un valor numérico para los pies.');
        return;
    }

    var pulgadas = pies * 12;
    mostrarResultado(pulgadas, 'pulgadas');
}

function convertirYardasAPulgadas() {
    var yardas = parseFloat(document.getElementById('yarda').value);

    if (isNaN(yardas)) {
        alert('Por favor, ingrese un valor numérico para las yardas.');
        return;
    }

    var pulgadas = yardas * 36;
    mostrarResultado(pulgadas, 'pulgadas');
}

function mostrarResultado(valor, unidad) {
    document.getElementById('resultado').innerHTML = '<p>Resultado: ' + valor + ' ' + unidad + '</p>';
}

function limpiarCampos(idCampo) {

    document.getElementById(idCampo).value = '';
    document.getElementById('resultado').innerHTML = '';
}
