import { Sequelize } from "../../bootstrap/server.js";
import {DataTypes} from 'sequelize';

const Journey = sequelize.define('Journey', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    vehicleId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    destinationId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    departureTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM( ['scheduled', 'in-progress', 'completed', 'cancelled'] ),
        allowNull: false
    }
})

Journey.belongsToMany(Users, {through: 'Destination'});

export default Journey