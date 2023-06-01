const enviarCorreo = require('../mailer');

const enviarFormulario = async  (nombre, correo, mensaje) =>{
    try{
        await enviarCorreo(nombre,correo,mensaje)
    }catch(error){
        console.log(error)
    }
};

module.exports = {
    enviarFormulario,
};