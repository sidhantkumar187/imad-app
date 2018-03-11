
// Server side javascript-
//                          responding to the requests by the client

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleTwo = {
	title : "Article-two | Sidhant Kumar",
	content : `<a href="/">Home</a>
            <hr/>
            <h3>Article two</h3>
            <p>This is the content of the article two page This is the content of the article two page
                This is the content of the article two page This is the content of the article two page 
                This is the content of the article two page This is the content of the article two page</p>`
};

var articleOne = {
	title : "Article-one | Sidhant Kumar",
	content :`<a href="/">Home</a>
            <hr/>
            <h3>Article Two</h3>
            <p>This is the content of the article one page This is the content of the article one page
                This is the content of the article one page This is the content of the article one page 
                This is the content of the article one page This is the content of the article one page</p>`
};

var articleThree = {
	title : "Article-three | Sidhant Kumar",
	content :`<a href="/">Home</a>
            <hr/>
            <h3>Article three</h3>
            <p>This is the content of the article three page This is the content of the article three page
                This is the content of the article three page This is the content of the article three page 
                This is the content of the article three page This is the content of the article three page</p>`
};

function createTemplate (data){
	var title = data.title;
	var content =data.content; 
	var htmlTemplate = `<html>
	    <head>
	        <title>${title}</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <link href="/ui/style.css" rel="stylesheet" />
	    </head>
	    <body>
	        <div class = "container">
	            ${content}
	        </div>
	    </body>
	</html>
	`;
	return htmlTemplate;
}

app.get('/', function (req, res) {          //for handling specific url in this case its index.html
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;                // initializinf=g the counter variable 
app.get('/counter', function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
} )

app.get("/article-one", function (req,res) {
    res.send(createTemplate(articleOne));
});

app.get("/article-two", function (req,res) {
    res.send(createTemplate(articleTwo));
});

app.get("/article-three", function (req,res) {
    res.send(createTemplate(articleThree));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
