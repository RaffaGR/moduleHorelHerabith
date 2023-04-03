// sistema do centario de hotel personalizado - events
export function CH3() {
    function EventoFouT() {
        let hor = parseInt(prompt("Qual a duração do evento em horas?"));
        let garcione = 10.50 * hor;
        let tGar = parseInt(prompt("Quantos garçons serão necessários?"));
        var tPoints = garcione * tGar;
        if (Number.isInteger(tPoints)) {
            tPoints = tPoints.toFixed(2).replace(".", ",");;
            alert(`Custo total: R$${tPoints}`);
        } else {
            alert(`Custo total: R$${tPoints.toFixed(2).replace(".", ",")}`);
        }
        var bestatigen = prompt("Gostaria de efetuar a reserva? S/N");
        if (bestatigen !== "S" && bestatigen !== "N") {
            alert("Pode ser que eu esteja errado, mas não acho que isso esteja certo.")
            EventoFouT();
        } else if (bestatigen === "S") {
            alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
            EventoFouT();
        } else {
            alert(`Retornando...`);
            EventoFouT();
        }
    }
    EventoFouT()
}