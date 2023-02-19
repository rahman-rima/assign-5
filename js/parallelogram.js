// Triangle
document.getElementById('parallelogram-click').addEventListener('click', function(){
    const getTriangleB = getInputFieldValueById('parallelogram-b');
    const getTriangleH = getInputFieldValueById('parallelogram-h');



   const triangleTotal = cal(getTriangleB, getTriangleH);

   console.log(triangleTotal);
   triangleTotal.toFixed(2);
   // console.log('hello');

   // setTextElementValueById('list-check')
   const listContainer = document.getElementById('list-container');

   const li = document.createElement('li');
   const nameT = document.getElementById('name-prs');
   const see = nameT.innerText ;
   const cm2 = document.getElementById('cm2');
   
   li.innerText = see + " :  " + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ triangleTotal +cm2.innerText;
   li.classList.add('item');
   listContainer.appendChild(li);

})