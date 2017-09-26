let mensaje = "Debugeando Coder!"

function saludar(){  
    debugger;  
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}
