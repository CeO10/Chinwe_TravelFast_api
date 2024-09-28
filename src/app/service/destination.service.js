import Config from "../../config/app.config.js";
import {Destination} from "../models/destination.models.js";


export const createDestination = async(payload) => {
    return await Destination.create(payload, {
        include: [association. journey], as: "journey"
    });
};

export const getDestination = async(payload) => {
    return await Destination.find().populate(list)
};

export const getDestinationById = async(payload) => {
    return await Destination.findById().populate(list)
};

export const updateDestination = async(id) => {
    return await Destination.update().populate(list)
};

export const deleteDestination = async(id) => {
    return await Destination.delete().populate(list)
};


export const schedulejourney = async(payload) => {
    const session = sequelize.start() 
}