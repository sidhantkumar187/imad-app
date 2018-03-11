
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
button.onclick = function (){
    
    // Make a request to the counter end-point
    var request = new XMLHttpRequest();
    
    // capture the response and store it in the variable 
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.HTML = counter.toString();
            }
        }
    //Not DONE yet
    };
    //render the variable in the correct span
}