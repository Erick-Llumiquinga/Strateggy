const express = require('express');
const Envio = require('../models/Envio');
const routerApi = express.Router();

routerApi.route('/procesar')
  .get((req, res) => {
    let ubicaciones = new Envio();

    res.json(ubicaciones);
  });


module.exports = routerApi;

