const {Router} = require('express');
const formularioRoute = require('./formularioRoute');

const router = Router();

router.use('/formulario', formularioRoute);

module.exports = router;

