const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API',
      version: '1.0.0',
      description: 'Una descripción de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Reemplaza con la URL de tu servidor
      },
    ],
  },
  apis: ['./server/*.js'], // Ruta de tus archivos de rutas de la API
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
