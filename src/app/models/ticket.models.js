import { DataTypes } from "sequelize";


const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.UUID
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        deafultValue: DataTypes.UUIDV4
    },
    journeyId: {
        type: DataTypes.UUID
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: auto,
    },
    status: {
        type: DataTypes.ENUM ['booked', 'cancelled', 'required'],
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
    }
});

export default Ticket