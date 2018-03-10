console.log('Loaded!');

// changing the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'Hola-Main.js';

// moving the image

var img = document.getElementById('madi');
var marginleft = 0;
function moveRight (){
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function (){
    var interval = setInterval(moveRight, 100);
};