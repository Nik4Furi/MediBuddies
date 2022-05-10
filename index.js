//DECLARE THE VARIABLES
const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser')
const viewPath = path.join(__dirname,'views');

//EXPRESS SPECIFIC STURFF

app.use('/static',express.static('static'));
app.use(express.urlencoded());

//PUG SPEDIFIC STUFF
app.set('view engine','pug');
app.set('views',viewPath);

//ENDPOINTS
app.get('/',(req,res)=>{
    // res.send("Hello, is this home page?")
    res.status(200).render('home.pug');
})
app.get('/about',(req,res)=>{ 
    // res.send("Hello, is this about page?")
    res.status(200).render('about.pug');
})

//LISTING THE PORT
app.listen(port,()=>{
    console.log(`This web listening the localhost:${port}`);
});