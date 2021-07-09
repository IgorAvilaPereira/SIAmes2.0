// importar
var vetDiario = diario.split("<quebra>");
var qtde = vetDiario.length;
var ciclo = document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector("#linha_id_ciclo_letivo").innerHTML;

// erro - etapa
var erroEtapa = false;
var vetErroEtapa = [];

// erro - data
var erroData = false;
var vetErroData = [];
var patternValidaData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;

var i = 0;
while(i < qtde){
    linha = vetDiario[i].split(";");
    if (linha.length != 1){
        etapa = linha[0];
        data = linha[1];
        atividade = linha[2];        
        // etapa
        if (ciclo.includes(".Ano.") && etapa > 0 && etapa <= 4){            
            document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#cd_etapa_'+(i+1)).innerHTML = 
            "<select name='cd_etapa[]' style='width:60px'> \
            <option value=''></option> \
            <option value='1' "+((etapa == 1) ? 'selected' : '')+">1</option> \
            <option value='2' "+((etapa == 2) ? 'selected' : '')+">2</option> \
            <option value='3' "+((etapa == 3) ? 'selected' : '')+">3</option> \
            <option value='4' "+((etapa == 4) ? 'selected' : '')+">4</option> \
            </select>";
        } else if (ciclo.includes(".Sem.") && etapa > 0 && etapa <= 2){
            document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#cd_etapa_' + (i + 1)).innerHTML = 
            "<select name='cd_etapa[]' style='width:60px'> \
            <option value=''></option> \
            <option value='1' "+((etapa == 1) ? 'selected' : '')+">1</option> \
            <option value='2' "+((etapa == 2) ? 'selected' : '')+">2</option> \
            </select>";
        } else {
            erroEtapa = true;
            vetErroEtapa.push(i+1);
        }
        // data
        if(patternValidaData.test(data)){        
            document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#dt_prevista_'+(i+1)).innerHTML = "<input name='dt_prevista[]' type='text' class='mascData hasDatepicker' value='"+data+"' style='width: 90px; text-align: center;' maxlength='10'>";
        } else {
            erroData = true;
            vetErroData.push(i+1);
        }
        // atividade
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#ds_atividade_'+(i+1)).innerHTML = "<input name='ds_atividade[]' type='text' value='"+atividade+"' style='width:690px'>";
    }
    i++;
}
// erros
if (erroEtapa) {    
    alert('[ERRO] SIAmes 2.0\n\nNas disciplinas semestrais:\n* Etapa deve ser <= 2\nNas disciplinas anuais:\n* Etapa deve ser <= 4\n\n=> VERIFICAR: aula(s): '+vetErroEtapa.join(','));
}
if (erroData) {    
    alert('[ERRO] SIAmes 2.0\n\nDatas incorretas\n\n=> VERIFICAR: data(s) da(s) aula(s): '+vetErroData.join(','));
}
