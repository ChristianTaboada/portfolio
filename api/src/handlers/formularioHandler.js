const {enviarFormulario} = require('../controllers/formularioController')

const enviarFormularioHandler = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;
  
    try {
      await enviarFormulario(nombre, correo, mensaje);
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
  };

  module.exports = {
    enviarFormularioHandler,
  }