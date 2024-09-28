import {config} from 'dotenv';

config();

export default {
    port: process.env.port || 34523,
    environment: process.env.NODE_ENV || "development",
    db: {
        development: process.env.STAGING_POSTGRES_DB_URI,
        test: process.env.TEST_POSTGRES_DB_URI,
        production: process.env.POSTGRES_DB_URI,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiration: process.env.JWT_EXPIRES_IN,
    },
}