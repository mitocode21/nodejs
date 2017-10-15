let calcular = (numero1, numero2) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let suma = numero1 + numero2;
            if(suma > 5){
                res(numero1 + numero2);
            }else{
                rej('Error al procesar los datos')
            }
            
        }, 2000);
    });
}

module.exports = {
    calcular
}