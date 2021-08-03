document.addEventListener("DOMContentLoaded", function () {
  // importar
  document.querySelector("#btn1").addEventListener("click", function () { 
    var conteudo = document.querySelector("#conteudo").value.trim().replace( /[\r\n]+/gm, "<quebra>" ).trim();           
    var codigo = "var diario = '"+conteudo+"';";
    chrome.tabs.executeScript({code: codigo}, function () {
            chrome.tabs.executeScript( {file: "script1.js"});
        })
    })
    // limpar
    document.querySelector("#btn2").addEventListener("click", function () { 
      // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?"); 
      // var codigo = "var totalDeAulas = '"+totalDeAulas+"';";      
      // chrome.tabs.executeScript({code: codigo}, function () {
      chrome.tabs.executeScript( {file: "script2.js"});
          })
      // })

      /*
      // diario multiplo
  document.querySelector("#btn3").addEventListener("click", function () { 
    var conteudo = document.querySelector("#conteudo").value.trim().replace( /[\r\n]+/gm, "<quebra>" ).trim();           
    var codigo = "var diario = '"+conteudo+"';";
    chrome.tabs.executeScript({code: codigo}, function () {
            chrome.tabs.executeScript( {file: "script3.js"});
        })
    })*/
})
