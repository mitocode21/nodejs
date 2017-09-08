const os = require('os');
const fs = require('fs');

const mi = require('./mito');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

//mi.saludar();
//console.log(mi.subs);
//let rpta = mi.sumar(10,5);

setTimeout(() => {
    console.log("Termine")
}, 2000);

//let rpta = mi.mostrar(10);
//console.log(rpta);

/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('mitocode.txt',`Información del cpu: ${cpu_string} `, function(error){
    if(error){
        console.log('Error al crear archivo');
    }    
});*/