// Rhombus
document.getElementById('rhombus-click').addEventListener('click', function(){
    const getTriangleB = getInputFieldValueById('rhombus-d1');
    const getTriangleH = getInputFieldValueById('rhombus-d2');



   const rhombusTotal = calCulate(getTriangleB, getTriangleH);
   rhombusTotal.toFixed(2);

//    console.log(triangleTotal);
   // console.log('hello');

   // setTextElementValueById('list-check')
   
   const listContainer = document.getElementById('list-container');

   const li = document.createElement('li');
   const nameT = document.getElementById('name-r');
   const see = nameT.innerText ;
   const cm2 = document.getElementById('cm2');
   
   li.innerText = see + " :  " + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ rhombusTotal +cm2.innerText;
   li.classList.add('item');
   listContainer.appendChild(li);

})