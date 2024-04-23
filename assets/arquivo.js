var labelDay = document.getElementById('label-day');
var fieldDay = document.getElementById('day'); 
var errorDay = document.getElementById('error-day');

var labelMonth = document.getElementById('label-month');
var fieldMonth = document.getElementById('month'); 
var errorMonth = document.getElementById('error-month');

var labelYear = document.getElementById('label-year');
var fieldYear = document.getElementById('year'); 
var errorYear = document.getElementById('error-year');

var yearsResult = document.getElementById('years-result');
var monthsResult = document.getElementById('months-result');
var daysResult = document.getElementById('days-result');

function maximo(campo, tamanhoMaximo) {
    if(campo.value.length == tamanhoMaximo) {
        return false;
    }
    return true;
}

/*
 * Responsavel por calcular dias, meses e anos de vida
 */
function processarCalculo() {
    if (validarDia() & validarMes() & validarAnos()) {
        if (validarData()) {
            calcular();
        } 
    }
}

function validarDia() {
    if (fieldDay.value.length == 0) {
        aplicarErros(labelDay, fieldDay, errorDay, "This field is required");
        return false;
    } else if (fieldDay.value < 1 || fieldDay.value > 31) {
        aplicarErros(labelDay, fieldDay, errorDay, "Must be a valid day");
        return false;
    } else {
        revertErrors(labelDay, fieldDay, errorDay);
    }
    return true;
}

function validarMes() {
    if (fieldMonth.value.length == 0){
        aplicarErros(labelMonth, fieldMonth, errorMonth, "This field is required");
        return false;
    } else if (fieldMonth.value < 1 || fieldMonth.value > 12) {
        aplicarErros(labelMonth, fieldMonth, errorMonth, "Must be a valid month");
        return false;
    } else {
        revertErrors(labelMonth, fieldMonth, errorMonth);
    }
    return true;
}

function validarAnos() {
    var ano = new Date().getFullYear();
    if (fieldYear.value.length==0){
        aplicarErros(labelYear, fieldYear, errorYear, "This field is required");
        return false;
    } else if(fieldYear.value < 1 || fieldYear.value > ano){
        aplicarErros(labelYear, fieldYear, errorYear, "Must be a valid year");
        return false;
    } else {
        revertErrors(labelYear, fieldYear, errorYear);
    }
    return true;
}

function validarData() {
    var dia = parseInt(fieldDay.value);
    var mes = parseInt(fieldMonth.value) - 1;
    var ano = parseInt(fieldYear.value);
    var data = new Date(ano, mes, dia);

    if (data.getDate() != dia || data.getMonth() != mes || data.getFullYear() != ano){
        aplicarErros(labelDay, fieldDay, errorDay, "Must be a valid date");
        return false;
    }
    return true;
}

function calcular(){
    var dia = parseInt(fieldDay.value);
    var mes = parseInt(fieldMonth.value) - 1;
    var ano = parseInt(fieldYear.value);
    var dataNascimento = new Date(ano, mes, dia);

    var dataAtual = new Date();

    var diferencaEmMilissegundos = dataAtual - dataNascimento;

    var dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    var anos = Math.floor(dias / 365.25);
    dias -= anos * 365.25;

    var meses = Math.floor(dias / 30.4375);
    dias -= meses * 30.4375;

    yearsResult.innerHTML = Math.max(0, anos);
    monthsResult.innerHTML = meses;
    daysResult.innerHTML = Math.floor(dias);
}


function aplicarErros(label, field, messageErro, text) {
    messageErro.innerHTML = text;
    messageErro.classList.remove("hide");
    addError(messageErro);
    addError(label);
    addError(field);
}

function revertErrors (label, field, messageErro) {
    messageErro.classList.add("hide");
    removeError(messageErro);
    removeError(label);
    removeError(field);
}

function addError(element){
    element.classList.add("error");
}

function removeError(element){
    element.classList.remove("error");
}