// limpar
var nodelistToArray = Array.prototype.slice.call(document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelectorAll("[id*='ds_atividade_']"));
var totalDeAulas = nodelistToArray.length;
var ciclo = document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector("#linha_id_ciclo_letivo").innerHTML;
var i = 0;
while (i < totalDeAulas) {
    etapa = "";
    data = "";
    atividade = "";    
    if (ciclo.includes(".Ano.")){
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#cd_etapa_' + (i + 1)).innerHTML = "<select name='cd_etapa[]' style='width:60px'><option value='" + etapa + "'>" + etapa + "</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option><option value='4'>4</option></select>";
    } else {
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#cd_etapa_' + (i + 1)).innerHTML = "<select name='cd_etapa[]' style='width:60px'><option value='" + etapa + "'>" + etapa + "</option> <option value='1'>1</option> <option value='2'>2</option></select>";
    }    
    document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#dt_prevista_' + (i + 1)).innerHTML = "<input name='dt_prevista[]' type='text' class='mascData hasDatepicker' value='" + data + "' style='width: 90px; text-align: center;' maxlength='10'>";
    document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#ds_atividade_' + (i + 1)).innerHTML = "<input name='ds_atividade[]' type='text' value='" + atividade + "' style='width:690px'>";
    i++;
}