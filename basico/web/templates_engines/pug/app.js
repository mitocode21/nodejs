const express = require('express');
const app = express();

let personas = [
    {
        id: 1,
        nombre: "MitoCode"
    },
    {
        id: 2,
        nombre: "Mito"
    },
    {
        id: 3,
        nombre: "Code"
    }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('template', { titulo: 'pug', mensaje: 'MitoCode | Pug', personas: personas });
});


app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});