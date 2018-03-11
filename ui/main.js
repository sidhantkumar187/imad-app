
// this is client-side java-script 


console.log('Loaded!');

// changing the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'Hola-Main.js';

// moving the image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function (){
    var interval = setInterval(moveRight, 50);  // calling moveRight function to move image by passing time interval(50ms)
};