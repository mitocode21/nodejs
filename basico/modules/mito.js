//console.log(module);

let subscriptores = 22000;

/*module.exports.saludar = function(){
    console.log('Suscribete al canal Coder');
}

module.exports.subs = subscriptores;*/

module.exports = {
    subs: subscriptores,
    saludar: () => {
        //code 1
        //code 2
        console.log('Hola Coder');
    },
    sumar: (a, b) => a + b,
    mostrar: a => a + 10
}

