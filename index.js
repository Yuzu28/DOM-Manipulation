console.log('*********');
const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');
//select the element ID of the click me button
const clickInput = document.getElementById('createBox')

// step1: created a new div; add class ".box"; out the div in the box-container

    
    // const el = document.createElement('div'); //createElement
    // el.classList.add('box')   //add the box class
    // const boxcontainer = document.querySelector('.box-container');
    // boxcontainer.appendChild(el); //append the new element to the dom


    //create a function to add boxes
   const handleClick = (e) => {
       event.preventDefault();
       var xAxis = document.getElementById("X").value;
        var yAxis = document.getElementById("Y").value;

        if(xAxis > 550 || yAxis > 350) {
            alert('Not possible!')}
//**************************************** */
        else if ((xAxis == "") && (yAxis =="")){
            const el = document.createElement('div');

            el.style.marginLeft = ((Math.floor(Math.random() * 550))  + 'px');
            el.style.marginTop = ( (Math.floor(Math.random() * 350))+ 'px');
            // el.style.backgroundColor =  (Math.floor(Math.random()*10000));
            el.classList.add('box');
            boxContainer.appendChild(el);
            el.addEventListener('click',(event) => {el.remove();
        
            });

        let colorRan = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
       let colorstr = "#";
       for(colorIndex = 0; colorIndex < 6; colorIndex++){
       colorstr += colorRan[Math.floor(Math.random()*16)];
       el.style.backgroundColor =colorstr;
       }

       el.addEventListener('mouseover',(hover) => {
        el.style.marginLeft = (Math.floor(Math.random() * 550) + 'px');
        el.style.marginTop = (Math.floor(Math.random() * 350)+ 'px');
        el.style.zIndex = (Math.floor(Math.random() * 20)+ 'px');
       });
    }



    //  ***************************************************************      
         else {
    //    console.log(xAxis);
    //    console.log(yAxis);
    const el = document.createElement('div');

       el.style.marginLeft = (xAxis + 'px');
       el.style.marginTop = ( yAxis+ 'px');
       el.style.backgroundColor = select.value;
       el.classList.add('box');
       boxContainer.appendChild(el);
       // remove box when you click on it
       el.addEventListener('click',(event) => {el.remove();
        
       });

       // hover over box to move it to a new random location
       el.addEventListener('mouseover',(hover) => {
        el.style.marginLeft = (Math.floor(Math.random() * 550) + 'px');
        el.style.marginTop = (Math.floor(Math.random() * 350)+ 'px');
        el.style.zIndex = (Math.floor(Math.random() * 20)+ 'px');

       });
    }
  }


clickInput.addEventListener('click', handleClick);






