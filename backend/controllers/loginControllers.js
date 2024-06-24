import userModel from "../models/models.js";

export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new userModel({ email, password });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.find({});
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}