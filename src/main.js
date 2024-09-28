import {server} from "./bootstrap/server.js";
import appConfig from "./config/app.config.js";

(() => 
{
    try {
        server.listen(appConfig.port, () => {
            console.log('server is running on port');
        })
    }catch (error){
        console.error ('Server could not be started', error)
        process.exit(1)
    }
})();