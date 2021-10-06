const express = require('express');


const routes = express.Router();

routes.use(require('./document/document.route'));

module.exports = routes;