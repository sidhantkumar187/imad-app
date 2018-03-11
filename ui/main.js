
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

// counter code 
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    
    // Make a request to the counter end-point
    
    // capture the response and store it in the variable 
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}