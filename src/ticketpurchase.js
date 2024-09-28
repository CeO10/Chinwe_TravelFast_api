import appConfig from "./config/app.config.js";
import {Ticket} from "../../models/ticket.models.js";
import {Destination} from "../../models/destination.models.js";

class Ticket {
    constructor(Destination, price) {
        super (Destination, price); 
        this.Destination = Destination
        this.price = price;
        this.availabeTickets = Number
    };

    purchase(numberofTickets) {
        if (numberofTickets <= this.availableTickets) {
            const totalCost = numberofTickets * this.price;
            return totalCost;
        } else {
            console.log("Not enough tickets available")
            return null
        };
    }
};