import { DataTypes } from "sequelize";


const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    journeyId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    driverId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    passengerFeedback: {
        type: DataTypes.STRING,
        allowNull: true
    },
    issuesReported: {
        type: DataTypes.STRING,
        allowNull: true
    },
    journeyDuration: {
        type: DataTypes.INTEGER,
    },
    fuelConsumption: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Report