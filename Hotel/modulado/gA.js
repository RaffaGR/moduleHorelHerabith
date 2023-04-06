import nomeUsuario from "./main.js"; // desnecessario, apenas serve para exnxergar o funcionamento

// carros do hotel - GasolinaAlcolica
export function CH7() {
    var vAW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    var vGW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    var vAS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    var vGS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
    /* var vAW = 4.20
    var vGW = 5.82
    var vAS = 4.35
    var vGS = 6.17 */

    // 2 tentativas com regras - regra de três para calcular qual combustível é mais vantajoso em cada posto
    // 42 = lT = litros total --- l = lA = plA = preço litro alcool --- vAW = pA = preço alcool --- vGW = pG = preço gasolina
    // var lAW = (42 * vAW) / pTA; // falta o valor de litros da grandeza 2, não conseguiremos calcular usando a regra de 3!!!
    // poderiamos verificar qual combustivel é o mais em conta usando 70% do valor da gasolina, ou seja, use a comparação g*0.70 - pelo fato da gasolina estar 30% mais cara que o alcool tiramos isso dela e então comparamos


    // primeira tentativa sem regras - sentido inverso, pelo fato do alcool estar 30% mais barato, adicionamos 30% nela e então comparamos
    var gVSa = "";
    divino = "";
    var daGloria1 = 0;
    if (vAW + vAW * 0.30 > vGW) {
        daGloria1 = vAW + vAW * 0.30
        gVSa = "álcool";
    } else {
        daGloria1 = vGW
        gVSa = "gasolina";
    }
    var daGloria2 = 0;
    if (vAS * 1.30 > vGS) {
        daGloria2 = vAS * 1.30;
        gVSa = "álcool";
    } else {
        daGloria2 = vGS;
        gVSa = "gasolina";
    }
    if (daGloria1 < daGloria2) {
        var deGracaDivina = daGloria2;
        divino = "Stark Petrol";
    } else {
        var deGracaDivina = daGloria1;
        divino = "Wayne Oil";
    }

    alert(`${nomeUsuario}, é mais barato abastecer com ${gVSa} no posto ${divino}`);
}
