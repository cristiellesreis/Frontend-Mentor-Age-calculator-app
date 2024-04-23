var labelDay = document.getElementById('label-day');
var fieldDay = document.getElementById('day'); 
var errorDay = document.getElementById('error-day');

var labelMonth = document.getElementById('label-month');
var fieldMonth = document.getElementById('month'); 
var errorMonth = document.getElementById('error-month');

var labelYear = document.getElementById('label-year');
var fieldYear = document.getElementById('year'); 
var errorYear = document.getElementById('error-year');

function maximo(campo, tamanhoMaximo) {
    if(campo.value.length == tamanhoMaximo) {
        return false;
    }
    return true;
}

function calcular() {
    validarDia();
    validarMes();
    validarAnos();
}

function validarDia() {
    if (fieldDay.value.length == 0) {
        aplicarErros(labelDay, fieldDay, errorDay, "This field is required");
    } else if (fieldDay.value < 1 || fieldDay.value > 31) {
        aplicarErros(labelDay, fieldDay, errorDay, "Must be a valid day");
    } else {
        revertErrors(labelDay, fieldDay, errorDay);
    }
}

function validarMes() {
    if (fieldMonth.value.length == 0){
        aplicarErros(labelMonth, fieldMonth, errorMonth, "This field is required");
    } else if (fieldMonth.value < 1 || fieldMonth.value > 12) {
        aplicarErros(labelMonth, fieldMonth, errorMonth, "Must be a valid month");
    } else {
        revertErrors(labelMonth, fieldMonth, errorMonth);
    }
}

function validarAnos() {
    var ano = new Date().getFullYear();
    if (fieldYear.value.length==0){
        aplicarErros(labelYear, fieldYear, errorYear, "This field is required");
    } else if(fieldYear.value < 1 || fieldYear.value > ano){
        aplicarErros(labelYear, fieldYear, errorYear, "Must be a valid year");
    } else {
        revertErrors(labelYear, fieldYear, errorYear);
    }
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