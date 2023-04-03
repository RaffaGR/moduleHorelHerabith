import { exit } from "./saida.js";

// sistema de cadastro e pesquisa - complexado
export function CH2() {
    nomesCH2 = [];
    function cadPesqH() {
        var opc = Number(prompt(`1- cadastrar;\n2- pesquisar;\n3- listar;\n4- sair.`));
        switch (opc) {
            case 1:
                if (nomesCH2.length >= 0 && nomesCH2.length <= 14) {
                    nami = prompt("Informe o nome do hóspede");
                    nomesCH2.push(nami);
                    alert(`Hóspede ${nami} foi cadastrada(o) com sucesso!`)
                } else {
                    alert("Voce já atingiu o maximo de 15 hóspedes cadastrados. Lelo lelo lelooh");
                }
                cadPesqH();
                break;
            case 2:
                console.log(nomesCH2);
                var nomiPesq = prompt("Por favor, informe o nome;(Exatamente igual)");
                /* var hospedate = nomesCH2.indexOf(nomiPesq) !== -1; */
                for (let i = 0; i < nomesCH2.length; i++) {
                    if (nomesCH2[i] !== nomiPesq) {
                        hospedate = false;
                        /* break; */
                    } else {
                        hospedate = true;
                    }
                }
                if (hospedate) {
                    alert(`Hóspede ${nomiPesq} foi encontrado.`);
                } else {
                    alert(`Hóspede ${nomiPesq} não foi encontrado.`);
                }
                cadPesqH();
                break;
            case 3:
                alert('Lista de nomes:');
                for (let i = 0; i < nomesCH2.length; i++) {
                    alert(nomesCH2[i]);
                }
                alert("Aqui estão todos: " + nomesCH2);
                cadPesqH();
                break;
            case 4: CH0
                exit();
                break;
            default:
                alert("ERROR")
                cadPesqH();
                break;
        }
    }
    cadPesqH();
}