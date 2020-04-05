'use strict';

let target = document.querySelectorAll('[data-from]');

window.addEventListener('scroll',scroll);
scroll();

function scroll (){

    target.forEach( function (el){
        let positionOfElement   = el.getBoundingClientRect(),
            windowHeight        = window.innerHeight;

        if ((windowHeight.top + positionOfElement.height > 0) || (positionOfElement.top < windowHeight * 0.9)) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}