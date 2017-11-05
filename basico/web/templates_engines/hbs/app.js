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

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render(
        'template',
        { titulo: 'Handlebars', mensaje: 'MitoCode | handlebars', personas: personas })
});

app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});