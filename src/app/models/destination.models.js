import { Sequelize } from "../../bootstrap/server.js";
import {DataTypes} from 'sequelize';

const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        DefaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    basefare: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

// associations with users and bookings
Destination.hasMany(User, {
    foreignKey: "journeyId"
} )

export default Destination