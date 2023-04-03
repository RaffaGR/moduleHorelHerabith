// sistema de cadastro com validação - simplificado
export function CH0() {
    var diaria = 2;
    var valorHospedagem = 0;
    function reservaQuarto() {
        diaria = prompt(`Qual o valor padrão da diária?`)
        /* if (isNaN(diaria) || !diaria || diaria < 0) {
            alert("valor Invalido");
            menuOptInicio();
        }  */
        var dia = parseInt(prompt(`Quantos dias de hospedado?`));
        if (isNaN(dia) || !dia || dia < 0 || dia > 30) {
            alert("valor Invalido");
            menuOptInicio();
        }
        valorHospedagem = dia * diaria;
        if (dia == 0) {
            reservaQuarto();
        } else if (dia > 0) {
            alert(`O valor da hospedagem fica ${valorHospedagem} RPoint`);
            nomeHospedePossible = prompt(`Qual o nome do hospede?`);
            var c = confirm(`${nomeUsuario}, você confirma a hospedagem para ${nomeHospedePossible}`);
            if (c == true) {
                var nomeHospede = nomeHospedePossible;
                alert(`${nomeUsuario}, reserva efeutada para ${nomeHospedePossible}. O valor total é de R$${valorHospedagem}`);
                reservaQuarto();
            } else if (c == false) {
                alert(`${nomeUsuario}, reserva não efetuada`)
                menuOptInicio();
            }
        }

    }
    reservaQuarto();
}