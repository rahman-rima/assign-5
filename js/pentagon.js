// Triangle
document.getElementById('pentagon-click').addEventListener('click', function(){
    const getTriangleB = getInputFieldValueById('pentagon-p');
    const getTriangleH = getInputFieldValueById('pentagon-b');



   const triangleTotal = calCulate(getTriangleB, getTriangleH);

   console.log(triangleTotal);
   // console.log('hello');
   triangleTotal.toFixed(2);

   // setTextElementValueById('list-check')
   const listContainer = document.getElementById('list-container');

   const li = document.createElement('li');
   const nameT = document.getElementById('name-pe');
   const see = nameT.innerText ;
   const cm2 = document.getElementById('cm2');
   li.innerText = see + " :  " + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ triangleTotal+cm2.innerText;
   li.classList.add('item');
   listContainer.appendChild(li);

})