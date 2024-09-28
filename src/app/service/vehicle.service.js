import {Vehicle} from "../models/vehicle.models.js";
import {User} from "../models/user.models.js";


export const createVehicle = async(payload) => {
    return await Vehicle.create(payload)
};

export const getVehicles = async(payload) => {
    return await Vehicle.find().populate(all)
};

export const getVehicle = async(payload) => {
    return await Vehicle.findById().populate(list)
};

export const updateVehicle = async(id) => {
    return await Vehicle.update()
};

export const deleteVehicle = async(id) => {
    return await Vehicle.delete()
};