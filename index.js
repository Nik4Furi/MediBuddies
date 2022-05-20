//DECLARE THE VARIABLES
const { urlencoded } = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT||8000;
const path = require('path');
const bodyParser = require('body-parser')
const viewPath = path.join(__dirname,'/templates/views');
const partialsPath = path.join(__dirname,'/templates/Partials');

//EXPRESS SPECIFIC STURFF
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//HBS SPEDIFIC STUFF
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

//ENDPOINTS
app.get('/',(req,res)=>{
    // res.send("Hello, is this home page?")
    res.status(200).render('home',{title:'Home: '});
})
app.get('/about',(req,res)=>{ 
    // res.send("Hello, is this about page?")
    res.status(200).render('about',{title:'About: '});
})
app.get('/appointment',(req,res)=>{ 
    // res.send("Hello, is this about page?")
    res.status(200).render('appointment',{title:'Appointment: '});
})
app.get('/surveys',(req,res)=>{ 
    // res.send("Hello, is this about page?")
    res.status(200).render('survey',{title:'Surveys: '});
})

app.get('*',(req,res)=>{ 
    // res.send("Hello, is this about page?")
    res.status(404).render('errorPage');
})

//LISTING THE PORT
app.listen(port,()=>{
    console.log(`This web listening the localhost:${port}`);
});