// limpar

// ex: aps tem 144 linhas na planilha do sia
// var totalDeAulas = 144; 

// o restante do codigo n precisa ser mexido
var i = 0;
while(i < totalDeAulas){
        etapa = "";
        data = "";
        atividade = "";        
        // document.querySelector('#cd_etapa_'+(i+1)).innerHTML = "<select name='cd_etapa[]' style='width:60px'><option value='"+etapa+"'>"+etapa+"</option></select>";
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#cd_etapa_'+(i+1)).innerHTML = "<select name='cd_etapa[]' style='width:60px'><option value='"+etapa+"'>"+etapa+"</option></select>";
        // document.querySelector('#dt_prevista_'+(i+1)).innerHTML = "<input name='dt_prevista[]' type='text' class='mascData hasDatepicker' value='"+data+"' style='width: 90px; text-align: center;' maxlength='10'>";
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#dt_prevista_'+(i+1)).innerHTML = "<input name='dt_prevista[]' type='text' class='mascData hasDatepicker' value='"+data+"' style='width: 90px; text-align: center;' maxlength='10'>";
        // document.querySelector('#ds_atividade_'+(i+1)).innerHTML = "<input name='ds_atividade[]' type='text' value='"+atividade+"' style='width:690px'>";
        document.querySelector("#sia3app").querySelector("#frame_aplicacao").contentWindow.document.querySelector('#ds_atividade_'+(i+1)).innerHTML = "<input name='ds_atividade[]' type='text' value='"+atividade+"' style='width:690px'>";
    i++;
}