import {Sequelize} from "../../bootstrap/server.js";
import {DataTypes} from 'sequelize';


const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    plateNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM (["active", "maintenance", "retired"]),
        allowNull: false
    },
    assignedDriverId: {
        type: DataTypes.UUID,
        allowNull: true
    }
});

export default Vehicle