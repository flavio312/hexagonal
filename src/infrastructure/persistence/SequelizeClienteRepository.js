const ClienteRepository = require('../../domain/repositories/ClienteRepository');
const ClienteModel = require('./models/ClienteModel');

class SequelizeClienteRepository extends ClienteRepository {
    async getAll() {
        return await ClienteModel.findAll();
    }

    async getById(id) {
        return await ClienteModel.findByPk(id);
    }

    async create(cliente) {
        return await ClienteModel.create(cliente);
    }

    async update(cliente) {
        const existingCliente = await ClienteModel.findByPk(cliente.id_cliente);
        if (!existingCliente) throw new Error('Cliente not found');
        return await existingCliente.update(cliente);
    }

    async delete(id) {
        const existingCliente = await ClienteModel.findByPk(id);
        if (!existingCliente) throw new Error('Cliente not found');
        return await existingCliente.destroy();
    }
}

module.exports = SequelizeClienteRepository;
