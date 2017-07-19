//grab everything we need

const buttons = document.querySelectorAll('.btn-crazy');
console.log(buttons);

//functions

function app() {
    console.log('hello');
    
    //get randon numbers
    
    let offsetLeft = (Math.random() * (window.innerWidth - this.clientWidth));
    let offsetTop = (Math.random() * (window.innerHeight - this.clientHeight));
    
    //apply random numbers
    
    
    this.style.left = offsetLeft + 'px';
    this.style.top = offsetTop + 'px';
    
}

//add event listeners

buttons.forEach(button => button.addEventListener('mouseenter', app));