import appConfig from "../../config/app.config"; 
import morgan from 'morgan';

const logger = () => morgan(
    appconfig.environment === 'development'
) 

export default logger