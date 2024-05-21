const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const ClienteModel = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    teléfono: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    dirección: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Clientes',
    timestamps: false,
});

module.exports = ClienteModel;
