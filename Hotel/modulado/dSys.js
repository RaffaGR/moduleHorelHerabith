// contratante do hotel - datingSistem
export function CH6() {
    var dayle = prompt("Qual o dia do seu evento?").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // para caracteres diacríticos
    var horat = parseInt(prompt("Qual a hora do seu evento?"));
    const dSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'segundafeira', 'tercafeira', 'quartafeira', 'quintafeira', 'sextafeira'];
    const dFimSemana = ['domingo', 'sabado', 'domingofeira', 'sabadofeira'];

    if (dSemana.includes(dayle)) {
        if (horat >= 7 && horat <= 23) {
            var empress = prompt("Qual o nome da empresa?"); //(Lojas Transilvânia)
            alert(`Restaurante reservado para a ${empress}. ${dayle.charAt(0).toUpperCase() + dayle.slice(1)} às ${horat}h. ^^`)
        } else {
            alert("Restaurante indisponível '^'");
            CH6()
        }
    } else if (dFimSemana.includes(dayle)) {
        if (horat >= 7 && horat <= 15) {
            var empress = prompt("Qual o nome da empresa?"); //(Lojas Transilvânia)
            alert(`Restaurante reservado para a ${empress}. ${dayle.charAt(0).toUpperCase() + dayle.slice(1)} às ${horat}h. ^^`)
        } else {
            alert("Restaurante indisponível '^'");
            CH6()
        }
    } else {
        alert("Provavelmente voce não digitou nenhuma semana, tente novamente!");
        CH6();
    }
}