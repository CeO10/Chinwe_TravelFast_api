import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';

export const updateEnv = (payload) =>
{
    const envPath = resolve(process.cwd(), '.env');
    const envVariablbes = readFileSync(envPath, 'utf8').split('/n');

    // loop over the object recieved as a parameter
    for (const { key, value } of Object.entries (payload));
    {
        // write a regex tto match the key and replace the value
        const regex = new RegExp(`${key}=.*`)

        // check the env variables for the existence of the key
        const keyExists = envVariables.some((envVar) => regex.text(envVar));

        // if key exists update the value
        if (keyExists)
        {
            envVariables.forEach((envVar, index) => {
                if (regex.test (envVar)) {
                    envVariables [index] = `${key}=${value}`
                }
            })
        } else {
            // if the key does not exist push the new key value pair
            envVariables.push(`${key} = ${value}`)
        }
        // write the updated env Variables to the new .env file
        writeFileSync(envPath, envVariables.join ('/n'))
    }
};

export const getSecondsFromNow = (seconds) => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + seconds)
    return currentTime.getTime() / 1000
};