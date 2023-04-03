// sistema de cenario com hotel buffet - lunch
export function CH4() {
    var nC = parseInt(prompt("Qual o número de convidados para o evento?max 350"));
    lC = nC * 0.20;
    lA = nC * 0.50;
    salgT = nC * 7.00;
    cC = lC * 0.80;
    cA = lA * 0.40;
    cS = (salgT / 100) * 34;
    muitaGrana = cC + cA + cS;
    /* Não temos o valor da unidade, então será considerada o valor do cento... */
    if (nC > 350) {
        alert("Quantidade de convidados superior à capacidade máxima.");
        CH4();
    } else {
        alert(`O evento precisará de ${lC} litros de café, ${lA} litros de água, ${salgT} salgados. O custo total do evento será de R$ ${muitaGrana.toFixed(2)}`);
        var confirmare = prompt("Gostaria de efetuar a reserva? S/N");
        if (confirmare !== "S" && confirmare !== "N") {
            alert("Acredito que há um erro nisso que precisamos corrigir")
            CH4();
        } else if (confirmare === "S") {
            alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
            CH4();
        } else {
            alert(`Retornando...`);
            CH4();
        }
    }
}