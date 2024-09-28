import {Op, where} from 'sequelize';
import {User} from "../models/user.models.js";
import {ConflictError, NotFoundError} from "../../lib/error-definitions.js";


// creating an instance
const user = await user.create
({
    username: 'User',
    isAdmin: true
});

export const createUser = async (payload) => {
    const user = await user.findOne({
        where: {[Op.or]: [{email:payload.email}, {id: payload.id}]}
    });

    // if user exists, give an error
    if (user, exists) throw new ConflictError("User with the details exists");

    return await user.create(payload)

    if (!user) throw new NotFoundError("This user does not exist");
};

export const getUser = async (id) => {
    return await user.findOne ({where: {id}});
};

export const getUserByEmail = async (email) => {
    return await user.findOne ({where: {email}})
};

export const getUserByRole = async (role) => {
    return await user.findOne ({where: {role}})
};

export const updateUserByRole = async (role) => {
    return await user.findOne ({where: {role}})
};

export const deleteUser = async (role) => {
    await user.destroy ({where: {role}})
};