const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('../infrastructure/web/middleware/errorHandler');
const { swaggerUi, specs } = require('./swagger');

const app = express();

app.use(bodyParser.json());

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;
