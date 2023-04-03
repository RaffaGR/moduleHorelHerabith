// climatização no hotel - ultimate acnalisy
export function CH8() {
    var kaisha = []; // Erro por tentar usar let
    var yusuan = []; // Erro por tentar usar let
    /* function bajeto(kaisha, yusuan) */
    function bajeto() {
        var vN = prompt("Qual o nome da empresa?");
        var vA = Number(prompt("Qual o valor por aparelho?"));
        var vT = Number(prompt("Qual a quantidade de aparelhos?"));
        var vP = Number(prompt("Qual a porcentagem de desconto?"));
        var vM = Number(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

        // faz os calculos do orçamento
        var preRetia = vA * vT
        if (vM < vT) {
            preRetia = preRetia - (preRetia * (vP / 100));
        }
        alert(`O serviço da Empresa ${vN} custará R$ ${preRetia.toFixed(2)}`);
        kaisha.push(vN);
        yusuan.push(preRetia);

        // pega o orçamento menor
        var gengXiao = yusuan[0];
        for (let i = 1; i < yusuan.length; i++) {
            if (yusuan[i] < gengXiao) {
                gengXiao = yusuan[i];
            }
        }

        // verifica se o usuario quer continuar
        var hwag_inhada = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();
        if (hwag_inhada !== "S" && hwag_inhada !== "N") {
            alert("Hmm, acho que isso não está certo. - Programa resetado!")
            CH8();
        } else if (hwag_inhada === "S") {
            bajeto();
        } else {
            /* alert(`continuando...`); */
            // define o nome da empresa do orçamento mais barato
            let saeg_in = yusuan.indexOf(gengXiao);
            saeg_in = kaisha[saeg_in];
            alert(`O orçamento de menor valor é o da empresa ${saeg_in} por R$ ${gengXiao}`);
            /* console.log(kaisha); */
        }


    }
    bajeto();
    /* bajeto(kaisha, yusuan); */
}