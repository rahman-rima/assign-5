
// Validation
function validationOfInputField(inputElement, inputElement2){
    // if(typeof inputElement == 'string' || typeof inputElement2 == 'string'|| inputElement < 0 ||  inputElement2 < 0 || inputElement === '' || inputElement2 === '' || inputElement == null || inputElement2 == null ){
    //     alert('Please enter a valid Number');
    // }else{
    //     alert('All valid Number');
    // }

    if(isNaN(inputElement) || isNaN(inputElement2) || inputElement < 0 ||  inputElement2 < 0){
       
        alert('Please enter a valid Number');
        return 0;
    }else{
        alert('All valid Number');
        return 1;
    }

}