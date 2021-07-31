

function trocaDeTexto(){
    document.getElementById("textoMain").innerText = "Projeto Losters";

    setTimeout(function(){
     document.getElementById("textoMain").style.color = "gray";
   alert("Obrigado!");
    },2000);
}
