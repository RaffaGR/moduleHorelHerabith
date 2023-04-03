/* "use strict" */
import { menuOptInicio } from "./inicioMenu.js";

var nomeUsuario;
function programPrincipal() {
    var hotel = prompt("Qual vai ser o nome do Hotel?(Serabeth)");
    document.title = "Standerfor " + hotel;
    alert(`O nome do hotel agora é: ${hotel}`);
    nomeUsuario = prompt("Qual o nome do usuario?");
    var senhaUsuario = parseInt((prompt("Qual o senha do usuario?(2678)")));
    switch (senhaUsuario) {
        case 2678:
            alert(`Bem vindo ao Hotel ${hotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!`)
            menuOptInicio();
            break;
        default:
            alert("Exploosion")
            programPrincipal();
            break;
    }
}

programPrincipal();