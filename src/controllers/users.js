const express = require('express');
const User = require('../models/user');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = async (req, res, next) => {
    try {
        let user = req.body;
        user = await User.create(user);

        const result = {
            message: 'User created',
            user
        }
        res.status(201).json(result);
    }catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        let user = req.body;

        await User.findByIdAndUpdate(id, user);
        user = await User.findById(id);
        
        const result = {
            message: 'User updated',
            user
        }
        res.status(200).json(result);
    }catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser = (req, res, next) => {
    try {
        const result = {
        message: 'User updated with patch'
        }
        res.json(result);
    }catch (err) {
        next(err);
    }
};
    
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        user.remove();

        const result = {
            mesagge: `User with id: ${id} deleted`
        }
    res.json(result);
    }catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}


