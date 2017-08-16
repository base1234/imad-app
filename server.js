var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var articles={
 'article-one': {
    title:'Article One| Srikanth narayanan',
    heading: 'Article One',
    date: '12 August 2017',
    content:`  <p>
              This is the content of my first article
            </p>`
 },
   'article-two': { 
    title:'Article Two| Srikanth narayanan',
    heading: 'Article Two',
    date: '13 August 2017',
    content:`  <p>
              This is the content of my second article
            </p>`
    },
   'article-three': { 
    title:'Article Three| Srikanth narayanan',
    heading: 'Article three',
    date: '14 August 2017',
    content:`  <p>
              This is the content of my third article
            </p>`
    }
}; 
   function createTemplate (data) {   
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    var htmlTemplate = `
    <html>

    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <d href="/">Home</d>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
    
    
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=[]content object for article one
  res.send(createTemplate(articles['article-one']));
  var articleName = req.params.articleName;
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
