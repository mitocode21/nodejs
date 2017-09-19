const _ = require('lodash');
const argv = require('yargs').argv;

//let comando = process.argv[2];

if (argv.usuario === 'MitoCode') {    
        let x = { "nombre": "Jaime" }
        let y = { "apodo": "MitoCode" }
        let z = [
            { nombre: "Jaime", apellido: "Medina", edad: 26 },
            { nombre: "Mito", apellido: "Code", edad: 26 }
        ]

        /*let resultado = _.assign(x,y);
        console.log(resultado);

        //_.times(3, ()=> console.log('Suscribete'));*/

        let resultado = _.find(z, {nombre: "Jaime", apellido: "Medina"});
        console.log(resultado);
}else{
    console.log('Usuario no válido');
}
