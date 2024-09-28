import {sequelize} from "../../config/db.config.js";
import {DataTypes} from 'sequelize';


const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        DefaultValue: DataTypes.UUIDV4
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        empty: false,
        set(value) {this.setDataValue ('password', hash(value))}
    },
    role: {
        // aceess to customers, travel agents and admin
        type: DataTypes.ENUM( ["user", "admin", "superadmin"] ),
        allowNull: false
    }
});


user.beforeCreate(async(user, options) => 
{
    user.password = await argon.hash(user.password)
});


export default User 