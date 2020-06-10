'use strict';

let bgelement = document.querySelectorAll('[data-bg]');

bgelement.forEach(function (el) {
    let bg = JSON.parse( el.getAttribute('data-bg') );
    
    el.style.backgroundColor = bg.color;
    el.style.backgroundImage = `url(${bg.img})`;
})