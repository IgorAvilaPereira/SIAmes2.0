// importar
var vetDiario = diario.split("<quebra>");
var qtde = vetDiario.length;
var ciclo = document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector("#linha_id_ciclo_letivo").innerHTML;
var i = 0;
while(i < qtde){
    linha = vetDiario[i].split(";");
    if (linha.length != 1){
        etapa = linha[0];
        data = linha[1];
        atividade = linha[2];        
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
            alert('ERRO: Nas disciplinas semestrais a etapa deve ser <= 2 (nas anuais <= 4)');
            break;
        }
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#dt_prevista_'+(i+1)).innerHTML = "<input name='dt_prevista[]' type='text' class='mascData hasDatepicker' value='"+data+"' style='width: 90px; text-align: center;' maxlength='10'>";
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#ds_atividade_'+(i+1)).innerHTML = "<input name='ds_atividade[]' type='text' value='"+atividade+"' style='width:690px'>";
    }
    i++;
}