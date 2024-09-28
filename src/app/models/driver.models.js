import { Sequelize } from "../../bootstrap/server.js";
import {DataTypes} from 'sequelize';
import Vehicle from "./vehicle.models.js";


const Driver = sequelize.define('Driver', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        empty: false,
        // hashing the value with an appropriate cryptogenic hash function
        set (value) {this.setDataValue('password', hash(value))}
    }
});

Driver.beforeCreate(async (driver, options) => 
{
    user.password = await argon2d.hash(driver.password)
});


export default Driver