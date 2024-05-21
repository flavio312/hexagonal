const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const HabitacionModel = sequelize.define('Habitacion', {
    id_habitación: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    número_habitación: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    precio_por_noche: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    tableName: 'Habitaciones',
    timestamps: false,
});

module.exports = HabitacionModel;
