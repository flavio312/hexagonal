const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ReservaModel = require ('./ReservaModel');

const PagoModel = sequelize.define('Pago', {
    id_pago: {
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
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    método_pago: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    tableName: 'Pagos',
    timestamps: false,
});

module.exports = PagoModel;
