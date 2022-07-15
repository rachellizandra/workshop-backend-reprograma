function calcularValorHora() {
    const ganhoMes = document.querySelector('#ganho-mes');
    const horasDia = document.querySelector('#horas-dia');
    const valorHora = ganhoMes.value / (22 * horasDia.value);

    const resposta = document.querySelector('#resposta');
    resposta.innerHTML = 'R$ ' + valorHora.toFixed(2)
}