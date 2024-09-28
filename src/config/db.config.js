import AppConfig from "../app.config.js";
import { Sequelize } from 'sequelize'; 

export const se1quelize = new sequelize (db.config[config.environment], {
    dialect: 'postgres',
    logging: config.environment === 'development',
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection has been established successfully");
    }
    catch (error) {
        console.error("Unable to connect to database", error);
    }
};