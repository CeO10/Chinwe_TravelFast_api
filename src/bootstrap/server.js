import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import {createServer} from 'http';
import appConfig from "../config/app.config.js";
import errorMiddleware from "../../middleware/error.middleware.js";

const app = express();
const server = createServer(app);

// middleware
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.urlencoded( {extended: true} ));

// creating routes
app.get("/health", (req, res) => 
{
    return res.json({
        success: true,
        message: "server is up and running"
    });
});

app.use("*", (req, res) => 
{
    throw new NotFoundError(
        "The requested route does not exist on the server"
    )
});

// error handle
app.use(errorMiddleware); 


export { server, app }