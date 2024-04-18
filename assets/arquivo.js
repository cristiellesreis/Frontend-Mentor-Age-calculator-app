var fieldDay = document.getElementById('day'); 
var errorDay = document.getElementById('error-day');

var fieldMonth = document.getElementById('month'); 
var errorMonth = document.getElementById('error-month');

var fieldYear = document.getElementById('year'); 
var errorYear = document.getElementById('error-year');


function maximo(campo, tamanhoMaximo) {
    console.info('campo', campo);
    console.info('tamanhoMaximo', tamanhoMaximo);
    console.info('campo.value.length', campo.value.length);
    if(campo.value.length == tamanhoMaximo) {
        console.info('retorno', false);
        return false;
    }
    console.info('retorno', true);
    return true;
}



function calcular(){
    validarCamposObrigatorios();
    validarCamposInvalidos();
}


function validarCamposObrigatorios(){

    if (fieldDay.value.length==0){
        errorDay.innerHTML="This field is required";
        errorDay.classList.remove("hide");
        errorDay.classList.add("error-message");
    }else{
        errorDay.innerHTML="";
    }


    if (fieldMonth.value.length==0){
        errorMonth.innerHTML="This field is required";
        errorMonth.classList.remove("hide");
        errorMonth.classList.add("error-message");
    }else{
        errorMonth.innerHTML="";
    }

    if (fieldYear.value.length==0){
        errorYear.innerHTML="This field is required";
        errorYear.classList.remove("hide");
        errorYear.classList.add("error-message");
    }else{
        errorYear.innerHTML="";
    }
}

function validarCamposInvalidos(){
    if(fieldDay.value.length > 0 && (fieldDay.value < 1 || fieldDay.value > 31)){
        errorDay.innerHTML="Must be a valid day";
        errorDay.classList.remove("hide");
        errorDay.classList.add("error-message");
    }

    if(fieldMonth.value.length > 0 && (fieldMonth.value < 1 || fieldMonth.value > 12)){
        errorMonth.innerHTML="Must be a valid month";
        errorMonth.classList.remove("hide");
        errorMonth.classList.add("error-message");
    }

    var ano = new Date().getFullYear();
    if(fieldYear.value.length > 0 && (fieldYear.value < 1 || fieldYear.value > ano)){
        errorYear.innerHTML="Must be a valid year";
        errorYear.classList.remove("hide");
        errorYear.classList.add("error-message");
    }

}