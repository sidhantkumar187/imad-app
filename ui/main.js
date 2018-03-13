
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
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// counter code 
var button = document.getElementById('counter');

button.onclick = function (){
    
    // Create a request object
    
    var request = new XMLHttpRequest();
    
    // capture the response and store it in the variable
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    //Not DONE yet
    };
    
    //make the request
    request.open('GET', 'http://kumarshanu8930.imad.hasura-app.io/counter',true);
    request.send(null);
};


// Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function () {
    // make a request to server and send the name 
    // capture the list of name and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};


