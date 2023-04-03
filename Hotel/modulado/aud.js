// sistema di conforti para o hotel - auditorio
export function CH5() {

    function confia() {
        confiast = prompt("Gostaria de efetuar a reserva? S/N");
        if (confiast !== "S" && confiast !== "N") {
            alert("Receio que isso não esteja exatamente correto.")
            return confia();
        } else if (confiast === "S") {
            return true;
        } else {
            return false;
        }
    }
    function auditiory() {
        var nummerInvites = prompt("Qual o número de convidados para o seu evento?");
        if (nummerInvites > 350 || nummerInvites < 0) {
            alert("Número de convidados inválido.");
        } else {
            if (nummerInvites <= 220) {
                chisloGaste = nummerInvites - 150;
                if (chisloGaste > 0) {
                    alert(`Use o auditório Laranja (inclua mais ${chisloGaste} cadeiras)`);
                    var res = confia();
                    if (res) {
                        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                    } else {
                        alert(`${nomeUsuario}, reserva não efetuada.`);
                    }
                } else {
                    alert(`Use o auditório Laranja`);
                    var res = confia();
                    if (res) {
                        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                    } else {
                        alert(`${nomeUsuario}, reserva não efetuada.`);
                    }
                }
            } else {
                alert(`Use o auditório Colorado`);
                var res = confia();
                if (res) {
                    alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                } else {
                    alert(`${nomeUsuario}, reserva não efetuada.`);
                }
            }
        }
    }
    auditiory();
}