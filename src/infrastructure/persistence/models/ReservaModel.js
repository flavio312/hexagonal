const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ClienteModel = require('./ClienteModel');
const HabitacionModel = require('./HabitacionModel');

const ReservaModel = sequelize.define('Reserva', {
    id_reserva: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: ClienteModel,
            key: 'id_cliente',
        },
    },
    id_habitación: {
        type: DataTypes.INTEGER,
        references: {
            model: HabitacionModel,
            key: 'id_habitación',
        },
    },
    fecha_entrada: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    tableName: 'Reservas',
    timestamps: false,
});

module.exports = ReservaModel;
