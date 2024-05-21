const express = require('express');
const router = express.Router();
const { validateCliente } = require('../middleware/validation');

module.exports = (clienteService) => {
    router.get('/', async (req, res) => {
        const clientes = await clienteService.getAllClientes();
        res.json(clientes);
    });

    router.get('/:id', async (req, res) => {
        const cliente = await clienteService.getClienteById(req.params.id);
        res.json(cliente);
    });

    router.post('/', validateCliente, async (req, res) => {
        const newCliente = await clienteService.createCliente(req.body);
        res.status(201).json(newCliente);
    });

    router.put('/:id', validateCliente, async (req, res) => {
        const updatedCliente = await clienteService.updateCliente(req.body);
        res.json(updatedCliente);
    });

    router.delete('/:id', async (req, res) => {
        await clienteService.deleteCliente(req.params.id);
        res.status(204).send();
    });

    return router;
};
