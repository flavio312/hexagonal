const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const ServicioAdicionalModel = sequelize.define('ServicioAdicional', {
    id_servicio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    costo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'Servicios_Adicionales',
    timestamps: false,
});

module.exports = ServicioAdicionalModel;
