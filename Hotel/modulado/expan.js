// sistema de cadastro sem validação - expandido
export function CH1() {
    var valorPadrione = 0;
    var normo6 = 0;
    var normo = 0;
    var normo60 = 0;
    var totaleValiston = 0;
    var defina = 0;
    function cadastroHospede() {
        if (valorPadrione == 0) {
            defina = prompt("Qual será o valor da diaria?");
            alert(`valor padrão da diaria é ${defina}`);
        }
        var hospedeIdade = 0;
        var nombre = "";
        var nombre = prompt("Qual o nome do Hóspede? Para parar digite: PARE");
        if (nombre == "PARE") {
            if (normo6 === undefined || totaleValiston === undefined || normo60 === undefined) {
                normo6 = 0;
                normo60 = 0;
                totaleValiston = 0;
            }
            alert(`${nomeUsuario} o valor total das hospedagens é: ${totaleValiston}; ${normo6} gratuidade(s); ${normo60} meia(s)`);
            valorPadrione++;
        } else {
            var hospedeIdade = Number(prompt(`Qual a idade do hospede?`));
            if (hospedeIdade > 0 && hospedeIdade < 7) {
                normo6++;
                alert(`${nombre} cadastrada(o) com sucesso. ${nombre} possui gratuidade`);
                valorPadrione++;
                cadastroHospede();
            } else if (hospedeIdade > 6 && hospedeIdade < 61) {
                normo++;
                alert(`${nombre} cadastrada(o) com sucesso.`)
                totaleValiston += defina;
                cadastroHospede();
            } else if (hospedeIdade > 60) {
                normo60 += 1;
                totaleValiston = defina / 2;
                alert(`${nombre} cadastrada(o) com sucesso. ${nombre} paga meia`);
                valorPadrione++;
                cadastroHospede();
            }
        }
    }
    cadastroHospede();
}