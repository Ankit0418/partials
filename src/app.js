const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');
const veiwPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');
const PORT = process.env.PORT || 3030;
app.set('view engine','hbs')
app.set('views',veiwPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
  res.render('index',{
    title:'ExpressApp',
    name:'MyName'
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'About me',
    name:'weather Predector'
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
   helptext:'This is some helpful text',
   title:'Help',
   name:'MyName'
  })
})

app.listen(PORT,()=>{
  console.log('Server is up on ${PORT}');
})

app.get('/ExpressApp', (req, res)=>{
  res.send({
    forecast:'It is snowing',
    location: 'Philadelphia'
  })
})

app.get('/help/*',(req,res)=>{
  res.render('404',{
    title:'404',
    name:'Myname',
    errorMessage:'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'MyName',
    errorMessage: 'Page not found'
  });
});
