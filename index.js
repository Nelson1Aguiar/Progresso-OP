var textoProgresso=document.getElementById("Percentual");
var barraProgresso = document.getElementById("barra-progresso");
var mensagemStatus = document.getElementById("mensagemStatus");
var tempoRestante = document.getElementById("TempoRestante");

const attProgresso=()=>{
    var epAssistido= parseFloat(document.getElementById("epAssistido").value);
    var epLancado=parseFloat(document.getElementById("epLancado").value);
    var progresso=(epAssistido*100)/epLancado;

    var epRestantes = epLancado - epAssistido;
    var hora = 0;
    var minuto = epRestantes *20;
    
    if(minuto>=60){
        hora = minuto / 60;
        hora = Math.floor(hora);
        minuto = minuto % 60;
    }

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
    if(hora>0){
        mensagemStatus.textContent = "Faltam "+epRestantes+" episódios.";
        if(hora===1){
            tempoRestante.textContent = hora+ " Hora e "+minuto+" minutos restantes"
        }else{
            tempoRestante.textContent = hora+ " Horas e "+minuto+" minutos restantes"
        }
    }else{
        mensagemStatus.textContent = "Faltam "+epRestantes+" episódios.";
        tempoRestante.textContent = minuto+" Minutos restantes.";
    }
}
document.getElementById("epAssistido").addEventListener("input", attProgresso);
document.getElementById("epLancado").addEventListener("input", attProgresso);
