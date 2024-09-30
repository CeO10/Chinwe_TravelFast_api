import { app } from "./server.js";
import ws from 'websocket';
import appConfig from "../config/app.config.js";

// creating a connection
const websocket = WebSocket('ws');
const wss = new WebSocket.server ({ appConfig})

wss.on('connection', (ws) => {
    console.log('Connected')

    ws.on('message', (message) => {
        console.log(`Received: $(message)`);

// Relate the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readystate === WebSocket.OPEN) {
                client.send(message);
            }
        })
    });
    // close connection
    ws.on('close', () => {
        console.log('Disconnected')
    });
});


console.log("WebSocket server is running on ws://localhost/:34523 ");