alert('[BETA] Datas Previstas == Data da Aula\n1) Acesse o "Diário de Classe Online" >> "Acessar"\n2) Selecione todas as linhas da tabela\n3) Escolha a opção "Alteração Multipla" \n 4) Abra novamente o SIAmes 2.0 (colocando todas atividades planejadas novamente na caixa de texto)\n5) Clique novamente neste botão\n6) Assim, todas as datas previstas no planejamento serão replicadas para as datas das aulas.');

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
            document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelectorAll("[id^=dt_aula]")[i].value = data;
        }
        i++;
    }
// }
try {
    document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector("#ds_atividade_realizada").innerHTML = "Conforme Previsto";
} catch (error) {
    
}