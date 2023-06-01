const nodemailer = require ('nodemailer');
require('dotenv').config()
const {EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_YO} = process.env;


const enviarCorreo = async (nombre, correo, mensaje) =>{

    try{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,
        },
    });


const mailOptions = {
    from: EMAIL_USERNAME,
    to: EMAIL_YO,
    subject: `Nuevo mensaje de cliente`,
    html:   `
    <html>
        <head>
            <title>Mensaje de parte de ${nombre}</title>
        </head>
        <body>
            <div>
                <h2>${nombre}</h2>
                <h2>${correo}</h2>
                <p>${mensaje}</p>
            </div>
        </body>
    </html>`

}

transporter.sendMail(mailOptions, (error, info) =>{
    if(error){
        console.log(error)
    }else{
    console.log('Correo enviado:' + info.response);}
});
}catch(error){
    console.log(error);
}

}
module.exports = enviarCorreo;