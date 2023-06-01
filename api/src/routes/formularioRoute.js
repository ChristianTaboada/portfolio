const express = require('express');
const router = express.Router();
const {enviarFormularioHandler} = require('../handlers/formularioHandler');

router.use(express.json());

router.post("/", enviarFormularioHandler);

module.exports = router;