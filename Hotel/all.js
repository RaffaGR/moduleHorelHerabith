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
        /* programPrincipal(); */

        // sistema do menu principal com reserva de quarto 1 
        function menuOptInicio() {
            var opcao = Number(prompt(`Opções de modos\n0:CH0 - 1:CH1 - 2:CH2 - 3:CH3 - 4:CH4 - 5:CH5 - 6:CH6 - 7:CH7 - 8:CH8`));
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
                default:
                    alert("ERROR");
                    menuOptInicio();
                    break
            }
        }

        // sistema de cadastro com validação - simplificado
        function CH0() {
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

        // sistema de cadastro sem validação - expandido
        function CH1() {
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

        // sistema de cadastro e pesquisa - complexado
        function CH2() {
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

        // sistema do centario de hotel personalizado - events
        function CH3() {
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

        // sistema de cenario com hotel buffet - lunch
        function CH4() {
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

        // sistema di conforti para o hotel - auditorio
        function CH5() {

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

        // contratante do hotel - datingSistem
        function CH6() {
            var dayle = prompt("Qual o dia do seu evento?").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // para caracteres diacríticos
            var horat = parseInt(prompt("Qual a hora do seu evento?"));
            const dSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'segundafeira', 'tercafeira', 'quartafeira', 'quintafeira', 'sextafeira'];
            const dFimSemana = ['domingo', 'sabado', 'domingofeira', 'sabadofeira'];

            if (dSemana.includes(dayle)) {
                if (horat >= 7 && horat <= 23) {
                    var empress = prompt("Qual o nome da empresa?"); //(Lojas Transilvânia)
                    alert(`Restaurante reservado para a ${empress}. ${dayle.charAt(0).toUpperCase() + dayle.slice(1)} às ${horat}h. ^^`)
                } else {
                    alert("Restaurante indisponível '^'");
                    CH6()
                }
            } else if (dFimSemana.includes(dayle)) {
                if (horat >= 7 && horat <= 15) {
                    var empress = prompt("Qual o nome da empresa?"); //(Lojas Transilvânia)
                    alert(`Restaurante reservado para a ${empress}. ${dayle.charAt(0).toUpperCase() + dayle.slice(1)} às ${horat}h. ^^`)
                } else {
                    alert("Restaurante indisponível '^'");
                    CH6()
                }
            } else {
                alert("Provavelmente voce não digitou nenhuma semana, tente novamente!");
                CH6();
            }
        }

        // carros do hotel - GasolinaAlcolica
        function CH7() {
/* 
            var vAW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
            var vGW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
            var vAS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
            var vGS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
            // var vAW = 4.20
            // var vGW = 5.82
            // var vAS = 4.35
            // var vGS = 6.17

            // 2 tentativas com regras - regra de três para calcular qual combustível é mais vantajoso em cada posto
            // 42 = lT = litros total --- l = lA = plA = preço litro alcool --- vAW = pA = preço alcool --- vGW = pG = preço gasolina
            // var lAW = (42 * vAW) / pTA; // faltaria 3 grandeza
            // poderiamos verificar qual combustivel é o mais em conta usando 70% do valor da gasolina, ou seja, use a comparação g*0.70 - pelo fato da gasolina estar 30% mais cara que o alcool tiramos isso dela e então comparamos


            // primeira tentativa sem regras - sentido inverso, pelo fato do alcool estar 30% mais barato, adicionamos 30% nela e então comparamos
            var gVSa = "";
            var divino = "";
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
                deGracaDivina = daGloria2;
                divino = "Wayne Oil";
            } else {
                deGracaDivina = daGloria1;
                divino = "Stark Petrol";
            }

            alert(`${nomeUsuario}, é mais barato abastecer com ${gVSa} no posto ${divino} ? metodo invertido, o mais barato é o mais caro ${deGracaDivina}`);
             */ //problema, estava invertido mais funcionava

            //Corrigido
            var vAW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
            var vGW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
            var vAS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
            var vGS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

            var gVSa = "";
            var divino = "";
            var daGloria1 = 0;
            if (vAW > vGW * 0.70) {
                daGloria1 = vAW;
                gVSa = "álcool";
            } else {
                daGloria1 = vGW
                gVSa = "gasolina";
            }
            var daGloria2 = 0;
            if (vAS > vGS * 0.70) {
                daGloria2 = vAS;
                gVSa = "álcool";
            } else {
                daGloria2 = vGS;
                gVSa = "gasolina";
            }
            if (daGloria1 < daGloria2) {
                var deGracaDivina = daGloria1;
                divino = "Wayne Oil";
            } else {
                deGracaDivina = daGloria2;
                divino = "Stark Petrol";
            }

            //Regra de 3 com 2 grandezas
            // var vASdoCarro = (vAS * 1) * 42;
            // var vGSdoCarro = (vGS * 1) * 42;
            // var vAWdoCarro = (vAW * 1) * 42;
            // var vGWdoCarro = (vGW * 1) * 42;

            // Não precisa da Regra de 3, por que não precisa mostrar o preço total
            
            alert(`${nomeUsuario}, é mais barato abastecer com ${gVSa} no posto ${divino} = valor total ${deGracaDivina}`);
        }

        // climatização no hotel - ultimate acnalisy
        function CH8() {
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

        // Close bye
        function exit() {
            alert(`Muito obrigado e até logo, ${nomeUsuario}`)
            window.close();
        }
        programPrincipal();
