// get everything needed

const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const question = accordion.querySelectorAll('.question');


//functions

function toggleaccordion() {
    console.log('clicked');
    
    let itemClick = this.parentNode;
    
    items.forEach(item => {
            if(itemClick == item) {
            itemClick.classList.toggle('open');
            return;     
       }
       item.classList.remove('open');
   });
}
//event listeners

question.forEach(question => question.addEventListener('click', toggleaccordion));