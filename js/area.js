
// get id

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function setTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    textElement.innerText;
}
function calCulate(a,b){
    const areaNew = 0.5 * a * b;
    return areaNew;
}

function cal(a, b){
   const result = a*b;
   return result;
}
function call(a,b){
    return 3.41*a*b;
}