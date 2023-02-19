function validationOfInputField(inputElement, inputElement2){
    if(typeof inputElement === 'string' || typeof inputElement2 === 'string'|| inputElement < 0 ||  inputElement2 < 0 || inputElement == '' || inputElement2 == ''){
        alert('Please enter a valid Number');
    }else{
        alert('All valid Number');
    }

}