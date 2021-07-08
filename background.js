document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () { 
    var conteudo = document.querySelector("#conteudo").value.trim().replace( /[\r\n]+/gm, "<quebra>" ).trim();           
    var codigo = "var diario = '"+conteudo+"';";
    chrome.tabs.executeScript({code: codigo}, function () {
            chrome.tabs.executeScript( {file: "script2.js"});
        })
    })
    document.querySelector("#btn2").addEventListener("click", function () { 
      var totalDeAulas = prompt("Qtde Total de Aulas/Linhas:"); 
      var codigo = "var totalDeAulas = '"+totalDeAulas+"';";      
      chrome.tabs.executeScript({code: codigo}, function () {
              chrome.tabs.executeScript( {file: "script3.js"});
          })
      })
})
