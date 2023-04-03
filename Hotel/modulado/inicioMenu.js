import { CH0 } from "./simp.js";
import { CH1 } from "./expan.js";
import { CH2 } from "./complex.js";
import { CH3 } from "./events.js";
import { CH4 } from "./lunch.js";
import { CH5 } from "./aud.js";
import { CH6 } from "./dSys.js";
import { CH7 } from "./gA.js";
import { CH8 } from "./ult.js";
import { exit } from "./saida.js";

// sistema do menu principal com reserva de quarto 1 
export function menuOptInicio() {
    var opcao = Number(prompt(`Opções de modos\n0:CH0 - 1:CH1 - 2:CH2 - 3:CH3 - 4:CH4 - 5:CH5 - 6:CH6 - 7:CH7 - 8:CH8 - 9:Sair`));
    switch (opcao) {
        case 0:
            /* UPDATEmenuDeOpcoes();
            UPDATEinicio();
            UPDATEerro(); */

            CH0();
            break;
        case 1:
            CH1();
            break;
        case 2:
            CH2();
            break;
        case 3:
            CH3();
            break;
        case 4:
            CH4();
            break;
        case 5:
            CH5();
            break;
        case 6:
            CH6();
            break;
        case 7:
            CH7();
            break;
        case 8:
            CH8();
            break;
        case 9:
            exit();
            break;
        default:
            alert("ERROR");
            menuOptInicio();
            break
    }
}