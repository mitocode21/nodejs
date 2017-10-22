const express = require('express');
const app = express();

let isLogin = () => true;

let logger = (req, res, next) => {
    console.log('Peticion de tipo: ', req.method );
    next();
}

let showIP = (req, res, next) => {
    console.log('IP: 127.0.0.1');
    next();
};

app.use((req, res, next) => {
    if(isLogin()){
        next();
    }else{
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);

app.get('/:user', (req, res) => {
    let usuario = req.params.user;
    res.send(`Bienvenido ${usuario}`);    
});

app.post('/', (req, res) => {
    res.send(`Hello World! ${req.method}`)
});

app.put('/', (req, res) => {
    res.send(`Hello World! ${req.method}`)
});

app.delete('/', (req, res) => {
    res.send(`Hello World! ${req.method}`)
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
