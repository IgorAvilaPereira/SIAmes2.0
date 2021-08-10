alert('[BETA] Datas Previstas == Datas de Realização das Aulas\n1) Acesse o "Diário de Classe Online" da disciplina desejada\n2) Selecione as linhas de um ciclo na tabela do Diário de Classe\n3) Escolha a opção "Alteração Múltipla" \n 4) No SIAmes: insira as atividades deste ciclo na caixa de texto\n5) Clique neste mesmo botão e veja que as datas previstas foram replicadas para as datas das aulas\n7) Basta submeter o formulário do SIA e tá pronto\n8) Agora replique para os demais ciclos!');

var vetDiario = diario.split("<quebra>");
var qtde = vetDiario.length;

// erro - data
var erroData = false;
var vetErroData = [];
var patternValidaData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;

// if (document.querySelector("#sia3app") != null){
    var i = 0;
    while(i < qtde){
        linha = vetDiario[i].split(";");
        if (linha.length != 1){
            data = linha[1];
            // if(patternValidaData.test(data)){       
                document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelectorAll("[id^=dt_aula]")[i].value = data;
            // } else {
            //     erroData = true;
            //     vetErroData.push(i+1);
            // }    
        }
        i++;
    }
// }
try {
    document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector("#ds_atividade_realizada").innerHTML = "Conforme Previsto";
} catch (error) {
    
}
// if (erroData) {    
//     alert('[ERRO] SIAmes 2.0\n\nDatas incorretas:\n\n=> VERIFICAR: data(s) da(s) aula(s): '+vetErroData.join(','));
// }