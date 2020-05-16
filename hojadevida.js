const express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname,"/public")));

app.get('/', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`);
});

app.get('/acerca', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/acerca.html`);
});

app.get('/aptitudes', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
});

app.get('/educacion', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/educacion.html`);
});

app.get('/experience', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/experience.html`);
});

app.get('/idiomas', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/idiomas.html`);
});

app.get('/style', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/css/style.css`);
});

app.get('/script', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/scripts/script.css`);
});

app.get('/gato', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/img/gato.jpg`);
});

app.get('/lobo', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/img/wolf.jpg`);
});

app.get('/oso', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/img/bear.png`);
});

app.get('/aguila', (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/public/img/eagle.png`);
});

app.listen(5500);
console.log('funciona');