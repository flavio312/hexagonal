class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async getAllClientes() {
        return await this.clienteRepository.getAll();
    }

    async getClienteById(id) {
        return await this.clienteRepository.getById(id);
    }

    async createCliente(cliente) {
        return await this.clienteRepository.create(cliente);
    }

    async updateCliente(cliente) {
        return await this.clienteRepository.update(cliente);
    }

    async deleteCliente(id) {
        return await this.clienteRepository.delete(id);
    }
}

module.exports = ClienteService;
