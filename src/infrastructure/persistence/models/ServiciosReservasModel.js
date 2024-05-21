const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ReservaModel = require('./ReservaModel');
const ServicioAdicionalModel = require('./ServicioAdicionalModel');

const ServiciosReservasModel = sequelize.define('ServiciosReservas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_reserva: {
        type: DataTypes.INTEGER,
        references: {
            model: ReservaModel,
            key: 'id_reserva',
        },
    },
    id_servicio: {
        type: DataTypes.INTEGER,
        references: {
            model: ServicioAdicionalModel,
            key: 'id_servicio',
        },
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    costo_total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'Servicios_Reservas',
    timestamps: false,
});

module.exports = ServiciosReservasModel;
