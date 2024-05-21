const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hotel Reception API',
            version: '1.0.0',
        },
    },
    apis: ['./src/infrastructure/web/controllers/*.js'], // Archivos de ruta de tus controladores
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
