var textoProgresso=document.getElementById("Percentual");
var barraProgresso = document.getElementById("barra-progresso");

const attProgresso=()=>{
    var epAssistido= parseFloat(document.getElementById("epAssistido").value);
    var epLancado=parseFloat(document.getElementById("epLancado").value);
    var progresso=(epAssistido*100)/epLancado;
        
    if(progresso>100 || progresso <0 || isNaN(epAssistido) || isNaN(epLancado)){
        barraProgresso.style.display="none";
        textoProgresso.textContent="";
        return;
    }
    else{
        barraProgresso.style.display="flex";  
    }
        
    barraProgresso.value=progresso;


    if(progresso !== Math.floor(progresso)){
        textoProgresso.textContent=progresso.toFixed(2)+"%";
        }
    else{
        textoProgresso.textContent=progresso.toString()+"%";
    }
}
document.getElementById("epAssistido").addEventListener("input", attProgresso);
document.getElementById("epLancado").addEventListener("input", attProgresso);
