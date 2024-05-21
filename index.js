const app = require('./config/express');
const sequelize = require('./config/database');
const SequelizeClienteRepository = require('./infrastructure/persistence/SequelizeClienteRepository');
const ClienteService = require('./application/services/ClienteService');
const createClienteController = require('./infrastructure/web/controllers/ClienteController');

// Repositorios y Servicios para otras entidades...

const clienteRepository = new SequelizeClienteRepository();
const clienteService = new ClienteService(clienteRepository);
const clienteController = createClienteController(clienteService);

app.use('/clientes', clienteController);

// Configurar rutas para otras entidades...

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
