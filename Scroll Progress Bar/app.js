//get everything needed

const scrollBar = document.querySelector('.scrollBar');


//functions

function progress() {
    console.log(scrollBar);
    
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const pcScroll = (scrolled / (fullHeight - windowHeight) * 100);
    
    scrollBar.style.width = pcScroll + `%`;
}

function debounce(func, wait = 15, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//event listeners

window.addEventListener('scroll', debounce(progress));