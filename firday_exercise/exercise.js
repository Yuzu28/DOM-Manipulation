console.log(`I poured spot remover on my dog. Now he's gone...`);

const container = document.querySelector(`.btn-container`);
const addBtn = document.querySelector(`[name="addBtn"]`);

const randNum = (max) => Math.floor(Math.random() * Math.floor(max));



// step1: create an add button

function handleclick(){
    const el = document.createElement('button');
    const generateRandomNum = randNum(10);
    el.setAttribute('data-number', generateRandomNum);
    el.classList.add('box');
    el.innerHTML += `I can be clicked ${generateRandomNum} times`
    container.appendChild(el);

}

//step 2 Creating a function that decrease the amount of clicks
function decrease(event){
    event.target.dataset.number -=1;
    if (event.target.dataset.number <= 0){ 
        event.target.dataset.number === 0;
        event.target.innerHTML = `No more Clicks`
        event.target.disabled = true;
        color(event.target);
    }
    else {
        event.target.innerHTML = `I can be clicked ${event.target.dataset.number} times`;
    }
}

function color(box){
    box.style.backgroundColor = 'red'
    box.style.color ='green'
}




addBtn.addEventListener('click', handleclick)
container.addEventListener('click', decrease);

/******************************
 * 
 *  Using the existing HTML and CSS, add Javascript code to do the following:
 * 
 *  1 - When the user clicks "Add New Button" a new button is added to the page.
 *  2 - The button can only be clicked a random number of times between 1 -10. A
 *      randNum function has been supplied.
 *  3 - Once the button has been clicked enough times, it should be disabled.
 * 
 ********************************/