// Triangle
document.getElementById('ellipse-click').addEventListener('click', function(){
    const getTriangleB = getInputFieldValueById('ellipse-a');
    const getTriangleH = getInputFieldValueById('ellipse-b');



   const triangleTotal = call(getTriangleB, getTriangleH);
   triangleTotal.toFixed(2);

//    console.log(triangleTotal);
   // console.log('hello');

   // setTextElementValueById('list-check')
   
   const listContainer = document.getElementById('list-container');

   const li = document.createElement('li');
   const nameT = document.getElementById('name-e');
   const see = nameT.innerText ;
   const cm2 = document.getElementById('cm2');
   
   li.innerText = see + " :  " + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ triangleTotal +cm2.innerText;
  
   li.classList.add('item');
   listContainer.appendChild(li);

})